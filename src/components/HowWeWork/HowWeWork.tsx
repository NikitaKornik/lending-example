import s from "./HowWeWork.module.scss";

const studioImg =
  "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1000&q=80";
const materialImg =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80";

export default function HowWeWork() {
  return (
    <section className={s.root}>
      <div className={s.visual}>
        <img
          src={studioImg}
          alt="Interior designer reviewing a warm neutral living room"
          loading="lazy"
        />
        <img
          src={materialImg}
          alt="Interior design materials and decor details"
          loading="lazy"
        />
      </div>
      <div className={s.content}>
        <span className={s.eyebrow}>Our process</span>
        <h2 className={s.h2}>How We Work</h2>
        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.step}>01</div>
            <h3 className={s.h3}>Consultation</h3>
            <div className={s.desc}>We discuss your ideas, needs, timeline, and budget.</div>
          </li>
          <li className={s.listItem}>
            <div className={s.step}>02</div>
            <h3 className={s.h3}>Concept</h3>
            <div className={s.desc}>We create a moodboard, layout direction, and visual story.</div>
          </li>
          <li className={s.listItem}>
            <div className={s.step}>03</div>
            <h3 className={s.h3}>Design</h3>
            <div className={s.desc}>We develop drawings, materials, furniture, and lighting.</div>
          </li>
          <li className={s.listItem}>
            <div className={s.step}>04</div>
            <h3 className={s.h3}>Execution</h3>
            <div className={s.desc}>We coordinate the final details so the space comes together.</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
