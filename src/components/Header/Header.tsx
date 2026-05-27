import Btn from "../ui/Btn/Btn";

import s from "./Header.module.scss";

import User from "@/assets/icons/user.svg?react";
import BurgerMenu from "@/assets/icons/burger-menu.svg?react";

import logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <img className={s.logoImg} src={logo} alt="Furniture logo" />
      </div>
      <Btn className={s.burgerMenu} leftIcon={<BurgerMenu />}></Btn>
      <ul className={s.nav}>
        <li>
          <a href="#">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contact</span>
          </a>
        </li>
      </ul>
      <Btn className={s.signBtn} rightIcon={<User />}>
        Sign In
      </Btn>
    </div>
  );
}
