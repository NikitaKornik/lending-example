import { Link, useParams } from "react-router-dom";

import { FadeIn } from "../../components/ui/animations/Reveal/Reveal";
import { getProjectBySlug, projects } from "../../data/projects";
import s from "./ProjectDetail.module.scss";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <FadeIn>
        <section className={s.notFound}>
          <span>Project not found</span>
          <h1>We could not find this interior case.</h1>
          <Link to="/">Back to projects</Link>
        </section>
      </FadeIn>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <article className={s.root}>
      <FadeIn>
        <section className={s.hero}>
          <div className={s.heroText}>
            <Link className={s.backLink} to="/">
              Back to projects
            </Link>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className={s.meta}>
              <div>
                <span>Category</span>
                <strong>{project.category}</strong>
              </div>
              <div>
                <span>Style</span>
                <strong>{project.design}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{project.location}</strong>
              </div>
              <div>
                <span>Timeline</span>
                <strong>{project.timeline}</strong>
              </div>
            </div>
          </div>
          <div className={s.heroImage}>
            <img src={project.img} alt={`${project.title} interior`} />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className={s.story}>
          <div>
            <span className={s.eyebrow}>Project brief</span>
            <h2>A clear design story, not a gallery dump.</h2>
          </div>
          <div className={s.storyText}>
            <p>{project.brief}</p>
            <dl>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Area</dt>
                <dd>{project.area}</dd>
              </div>
            </dl>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.12}>
        <section className={s.details}>
          {project.details.map((detail, index) => (
            <div className={s.detail} key={detail}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{detail}</p>
            </div>
          ))}
        </section>
      </FadeIn>

      <FadeIn delay={0.16}>
        <section className={s.related}>
          <div className={s.relatedHeader}>
            <span className={s.eyebrow}>More work</span>
            <h2>Explore another project</h2>
          </div>
          <div className={s.relatedGrid}>
            {relatedProjects.map((item) => (
              <Link
                className={s.relatedCard}
                key={item.slug}
                to={`/projects/${item.slug}`}
              >
                <img
                  src={item.img}
                  alt={`${item.title} interior`}
                  loading="lazy"
                />
                <strong>{item.title}</strong>
                <span>
                  {item.category} / {item.design}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>
    </article>
  );
}
