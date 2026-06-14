import LinkButton from "../ui/LinkButton/LinkButton";
import s from "./Hero.module.scss";

const heroImg =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85";

export default function Hero() {
  return (
    <div className={s.root}>
      <div className={s.info}>
        <h5>INTERIOR STUDIO</h5>
        <h3>Spaces shaped around the way you live.</h3>
        <div className={s.desc}>
          We design warm, functional interiors for homes, apartments, and
          boutique spaces with a calm, detail-led process.
        </div>
        <ul className={s.stats}>
          <li>
            <strong>120+</strong>
            <span>finished rooms</span>
          </li>
          <li>
            <strong>8</strong>
            <span>years of practice</span>
          </li>
          <li>
            <strong>4.9</strong>
            <span>client rating</span>
          </li>
        </ul>
        <div className={s.btns}>
          <LinkButton to="/projects">Our Projects</LinkButton>
          <LinkButton to="/contact" variant="secondary">
            Book a consultation
          </LinkButton>
        </div>
      </div>
      <div className={s.imgWrapper}>
        <img src={heroImg} alt="Bright modern living room with neutral furniture" />
        <div className={s.note}>
          <span>Latest project</span>
          <strong>Warm minimal apartment</strong>
        </div>
      </div>
    </div>
  );
}
