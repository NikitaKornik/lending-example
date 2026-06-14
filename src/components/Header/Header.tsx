import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import BrandLogo from "../BrandLogo/BrandLogo";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import Btn from "../ui/Btn/Btn";

import s from "./Header.module.scss";

import User from "@/assets/icons/user.svg?react";
import BurgerMenu from "@/assets/icons/burger-menu.svg?react";

export default function Header() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <header className={s.root}>
        <Link className={s.logo} to="/" aria-label="Go to home page">
          <BrandLogo />
        </Link>
        <Btn className={s.burgerMenu} leftIcon={<BurgerMenu />}></Btn>
        <ul className={s.nav}>
          <li>
            <NavLink to="/" end>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/studio">
              <span>Studio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <Btn
          className={s.signBtn}
          onClick={() => setIsConsultationOpen(true)}
          rightIcon={<User />}
        >
          Consultation
        </Btn>
      </header>
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
