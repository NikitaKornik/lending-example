import LinkButton from "../../components/ui/LinkButton/LinkButton";
import { FadeIn } from "../../components/ui/animations/Reveal/Reveal";
import s from "./Studio.module.scss";

const studioHero =
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=85";

const workspaceImg =
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85";

const materialImg =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85";

const values = [
  {
    title: "Quiet first",
    text: "We shape rooms around calm proportions, useful storage, and light that feels natural throughout the day.",
  },
  {
    title: "Material honesty",
    text: "Finishes are chosen for texture, durability, and the way they age, not only for the first photograph.",
  },
  {
    title: "Practical elegance",
    text: "Every plan has to work for real routines: movement, cleaning, children, guests, and slow mornings.",
  },
];

const stats = [
  ["9", "years shaping private interiors"],
  ["64", "rooms designed and delivered"],
  ["18", "trusted makers and suppliers"],
];

const process = [
  {
    step: "01",
    title: "Listen",
    text: "We begin with habits, constraints, measurements, and the feeling you want to return to every day.",
  },
  {
    step: "02",
    title: "Compose",
    text: "Layouts, materials, lighting, and furniture are tested together so the whole space has one rhythm.",
  },
  {
    step: "03",
    title: "Refine",
    text: "We simplify choices, price the important pieces, and turn the design into a clear implementation plan.",
  },
  {
    step: "04",
    title: "Install",
    text: "The last layer is handled with the same care as the first idea: styling, details, and final adjustments.",
  },
];

const notes = [
  "We prefer fewer, better decisions over endless options.",
  "Every project keeps a living materials board from the first concept.",
  "Budgets are discussed early, then checked against every major decision.",
];

export default function Studio() {
  return (
    <main className={s.root}>
      <FadeIn>
        <section className={s.hero}>
          <div className={s.heroText}>
            <span className={s.eyebrow}>Studio</span>
            <h1>Interior work for homes that need calm, clarity, and character.</h1>
            <p>
              We are a small design studio focused on tactile interiors,
              thoughtful layouts, and rooms that feel composed without becoming
              precious.
            </p>
            <div className={s.heroActions}>
              <LinkButton to="/projects">View projects</LinkButton>
              <LinkButton to="/contact" variant="secondary">
                Start a conversation
              </LinkButton>
            </div>
          </div>
          <div className={s.heroImage}>
            <img src={studioHero} alt="Warm modern interior studio space" />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className={s.values}>
          <div className={s.sectionIntro}>
            <span className={s.eyebrow}>Approach</span>
            <h2>We design around the way a room will actually be lived in.</h2>
          </div>
          <div className={s.valueGrid}>
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.12}>
        <section className={s.inside}>
          <div className={s.insideImage}>
            <img src={workspaceImg} alt="Interior design workspace with desk and samples" />
          </div>
          <div className={s.insideText}>
            <span className={s.eyebrow}>Inside the studio</span>
            <h2>A compact team with a precise, hands-on process.</h2>
            <p>
              Our work sits between design direction and practical delivery.
              We edit ideas, source durable pieces, coordinate makers, and keep
              every decision tied to the original brief.
            </p>
            <dl className={s.stats}>
              {stats.map(([number, label]) => (
                <div key={label}>
                  <dt>{number}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.16}>
        <section className={s.process}>
          <div className={s.sectionIntro}>
            <span className={s.eyebrow}>Process</span>
            <h2>From first conversation to the final cushion.</h2>
          </div>
          <div className={s.processGrid}>
            {process.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className={s.notes}>
          <div className={s.notesText}>
            <span className={s.eyebrow}>Studio notes</span>
            <h2>The small rules that keep our work grounded.</h2>
            <ul>
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div className={s.notesImage}>
            <img src={materialImg} alt="Neutral interior materials and furniture detail" />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.24}>
        <section className={s.cta}>
          <span className={s.eyebrow}>Next step</span>
          <h2>Bring us the room, the problem, or the mood you cannot quite name.</h2>
          <LinkButton to="/contact">Book a consultation</LinkButton>
        </section>
      </FadeIn>
    </main>
  );
}
