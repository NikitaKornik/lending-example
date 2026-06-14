import cn from "classnames";
import { Link } from "react-router-dom";

import LinkButton from "../ui/LinkButton/LinkButton";
import s from "./OurProjects.module.scss";

import { useState } from "react";
import { projectCategories, projects } from "../../data/projects";

const filter = ["All", ...projectCategories];

export default function OurProjects() {
  const [active, setActive] = useState("All");

  function selectCategory(text: string) {
    setActive(text);
  }

  return (
    <section className={s.root}>
      <div className={s.heading}>
        <span>Selected work</span>
        <h2 className={s.h2}>Our Latest Projects</h2>
        <p>
          A small look at finished homes, calm palettes, tactile materials, and
          rooms designed to be lived in.
        </p>
      </div>
      <ul className={s.filter}>
        {filter.map((item) => {
          return (
            <li
              key={item}
              className={cn(s.filterItem, {
                [s.active]: active === item,
              })}
              onClick={() => selectCategory(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <ul className={s.projects}>
        {projects
          .filter((project) => {
            if (active === "All") return true;
            return project.category === active;
          })
          .slice(0, 6)
          .map((project) => {
            return (
              <li key={project.id} className={s.project}>
                <Link
                  to={`/projects/${project.slug}`}
                  className={s.imgContainer}
                >
                  <img
                    className={s.img}
                    src={project.img}
                    alt={`${project.title} interior design project`}
                    loading="lazy"
                  />
                </Link>
                <Link className={s.a} to={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
                <span className={s.category}>
                  {project.category} / {project.design}
                </span>
              </li>
            );
          })}
      </ul>
      <LinkButton to="/projects">
        View All Projects
      </LinkButton>
    </section>
  );
}
