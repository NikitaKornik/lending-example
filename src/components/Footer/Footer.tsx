import s from "./Footer.module.scss";

import PhoneSvg from "@/assets/icons/phone.svg?react";
import EmailSvg from "@/assets/icons/email.svg?react";

import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <div className={s.root}>
      <div className={s.footerContainer}>
        <div className={s.logo}>
          <img className={s.logoImg} src={logo} alt="Furniture logo" />
        </div>
        <div>
          <div className={s.title}>ИНФОРМАЦИЯ</div>
          <ul className={s.ul}>
            <li>
              <a href="#">Наши магазины</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Обратная связь</a>
            </li>
            <li>
              <a href="#">Доставка и оплата</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Гарантийные обязательства</a>
            </li>
            <li>
              <a href="#">Мебель в кредит</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={s.title}>ДЛЯ ПОКУПАТЕЛЯ</div>
          <ul className={s.ul}>
            <li>
              <a href="#">Регистрация</a>
            </li>
            <li>
              <a href="#">Кабинет покупателя</a>
            </li>
            <li>
              <a href="#">История заказов</a>
            </li>
            <li>
              <a href="#">Избранные товары</a>
            </li>
            <li>
              <a href="#">Служба поддержки</a>
            </li>
            <li>
              <a href="#">Обмен / Возврат</a>
            </li>
            <li>
              <a href="#">Договор оферты</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={s.title}>КОНТАКТЫ</div>
          <ul className={s.ul}>
            <li>
              <PhoneSvg className={s.svg} />
              <a href="#">+(7) 777 777 77</a>
            </li>
            <li>
              <PhoneSvg className={s.svg} />
              <a href="#">+(7) 777 777 77</a>
            </li>
            <li>
              <EmailSvg className={s.svg} />
              <a href="#">info@info.com</a>
            </li>
            <li>
              <EmailSvg className={s.svg} />
              <a href="#">info@info.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copyright}>Copyright 2000 - 2026</div>
    </div>
  );
}
