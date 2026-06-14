import s from "./Footer.module.scss";

import BrandLogo from "../BrandLogo/BrandLogo";
import { contacts, visitInfo } from "../../data/contact";
import { footerServices, footerStudioLinks } from "../../data/navigation";
import LinkButton from "../ui/LinkButton/LinkButton";
import PhoneSvg from "@/assets/icons/phone.svg?react";
import EmailSvg from "@/assets/icons/email.svg?react";
import { Link } from "react-router-dom";

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
          <LinkButton to="/contact" variant="light">
            Book a consultation
          </LinkButton>
        </section>

        <nav className={s.footerNav} aria-label="Footer navigation">
          <div className={s.title}>STUDIO</div>
          <ul>
            {footerStudioLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className={s.footerNav}>
          <div className={s.title}>SERVICES</div>
          <ul>
            {footerServices.map((service) => (
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
