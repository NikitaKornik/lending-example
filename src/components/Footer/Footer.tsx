import { Link } from "react-router-dom";

import s from "./Footer.module.scss";

import BrandLogo from "../BrandLogo/BrandLogo";
import { contacts, visitInfo } from "../../data/contact";
import PhoneSvg from "@/assets/icons/phone.svg?react";
import EmailSvg from "@/assets/icons/email.svg?react";

const studioLinks = [
  { label: "Studio", to: "/studio" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Interior design",
  "Furniture selection",
  "Lighting plans",
  "Renovation styling",
  "Consultations",
];

export default function Footer() {
  const [addressInfo, hoursInfo] = visitInfo;

  return (
    <footer className={s.root}>
      <div className={s.footerContainer}>
        <section className={s.brandBlock}>
          <BrandLogo variant="light" />
          <p>
            Calm, practical interiors shaped around materials, light, and the
            way each room is lived in.
          </p>
          <Link className={s.cta} to="/contact">
            Book a consultation
          </Link>
        </section>

        <nav className={s.footerNav} aria-label="Footer navigation">
          <div className={s.title}>STUDIO</div>
          <ul>
            {studioLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className={s.footerNav}>
          <div className={s.title}>SERVICES</div>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className={s.contactBlock}>
          <div className={s.title}>CONTACT</div>
          <ul>
            {contacts.map((contact) => {
              const Icon = contact.type === "phone" ? PhoneSvg : EmailSvg;

              return (
                <li key={contact.value}>
                  <Icon className={s.svg} />
                  <div>
                    <span>{contact.label}</span>
                    <a href={contact.href}>{contact.value}</a>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <div className={s.footerBottom}>
        <span>Copyright 2026 Interior Studio</span>
        <span>{addressInfo[1]}</span>
        <span>{hoursInfo[1]}</span>
      </div>
    </footer>
  );
}
