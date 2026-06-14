import { FadeIn } from "../../components/ui/animations/Reveal/Reveal";
import { contacts, visitInfo } from "../../data/contact";
import s from "./Contact.module.scss";

export default function Contact() {
  return (
    <main className={s.root}>
      <FadeIn>
        <section className={s.hero}>
          <span className={s.eyebrow}>Contact</span>
          <h1>Tell us about the space you want to shape.</h1>
          <p>
            Share a few details about your home, timeline, and the way you want
            it to feel. We will help you choose the right next step.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className={s.grid}>
          <div className={s.mapCard}>
            <iframe
              title="Interior Studio map location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0032%2C40.7203%2C-73.9941%2C40.7266&layer=mapnik&marker=40.72345%2C-73.99865"
              loading="lazy"
            />
          </div>

          <div className={s.contactPanel}>
            <span className={s.eyebrow}>Reach us</span>
            <h2>Studio contacts</h2>
            <ul className={s.contactList}>
              {contacts.map((contact) => (
                <li key={contact.value}>
                  <span>{contact.label}</span>
                  <a href={contact.href}>{contact.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.12}>
        <section className={s.infoSection}>
          <div className={s.infoIntro}>
            <span className={s.eyebrow}>Visit</span>
            <h2>Appointments are calm, focused, and practical.</h2>
          </div>
          <dl className={s.infoList}>
            {visitInfo.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </FadeIn>

      <FadeIn delay={0.16}>
        <section className={s.brief}>
          <div>
            <span className={s.eyebrow}>Before we meet</span>
            <h2>A useful first message includes:</h2>
          </div>
          <ul>
            <li>Room type, approximate area, and location.</li>
            <li>Photos, floor plan, or a short note about what feels wrong.</li>
            <li>Your preferred timeline and investment range.</li>
          </ul>
        </section>
      </FadeIn>
    </main>
  );
}
