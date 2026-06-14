import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import BrandLogo from "../BrandLogo/BrandLogo";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import Btn from "../ui/Btn/Btn";
import { mainNavLinks } from "../../data/navigation";

import s from "./Header.module.scss";

import User from "@/assets/icons/user.svg?react";
import BurgerMenu from "@/assets/icons/burger-menu.svg?react";

export default function Header() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header className={s.root}>
        <Link className={s.logo} to="/" aria-label="Go to home page">
          <BrandLogo />
        </Link>
        <Btn
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
          className={s.burgerMenu}
          leftIcon={<BurgerMenu />}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        />
        <ul className={s.nav}>
          {mainNavLinks.map((link) => (
            <li key={link.to}>
              <NavLink end={link.end} to={link.to}>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <Btn
          className={s.signBtn}
          onClick={() => setIsConsultationOpen(true)}
          rightIcon={<User />}
        >
          Consultation
        </Btn>
      </header>
      {isMobileMenuOpen && (
        <div className={s.mobileOverlay} onClick={closeMobileMenu}>
          <nav
            aria-label="Mobile navigation"
            className={s.mobileMenu}
            id="mobile-navigation"
            onClick={(event) => event.stopPropagation()}
          >
            {mainNavLinks.map((link) => (
              <NavLink
                end={link.end}
                key={link.to}
                onClick={closeMobileMenu}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
            <Btn
              className={s.mobileConsultation}
              onClick={() => {
                closeMobileMenu();
                setIsConsultationOpen(true);
              }}
              rightIcon={<User />}
            >
              Consultation
            </Btn>
          </nav>
        </div>
      )}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
