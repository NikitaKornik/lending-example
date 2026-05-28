import HeroImg from "@/assets/images/hero.jpg";

import s from "./Hero.module.scss";

import Btn from "../ui/Btn/Btn";

import ArrowRight from "@/assets/icons/arrow-right.svg?react";

export default function Hero() {
  return (
    <div className={s.root}>
      <div className={s.info}>
        <h5>WE DESIGN SPACES YOU'LL LOVE</h5>
        <h3>Interior design that reflects your style.</h3>
        <div className={s.desc}>
          We create beautiful, functional spaces tailored to your lifestyle and
          preferences.
        </div>
        <div className={s.btns}>
          <Btn rightIcon={<ArrowRight />}>Our Projects</Btn>
          <Btn variant="secondary">Book a consultation</Btn>
        </div>
      </div>
      <div className={s.imgWrapper}>
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  );
}
