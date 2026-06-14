import s from "./Features.module.scss";

import ShieldSvg from "@/assets/icons/shield.svg?react";
import BoxSvg from "@/assets/icons/box.svg?react";
import GraphSvg from "@/assets/icons/graph.svg?react";
import TimeSvg from "@/assets/icons/time.svg?react";

export default function Features() {
  return (
    <section className={s.root}>
      <div className={s.header}>
        <span>Why clients choose us</span>
        <h2>Design support from the first idea to the final cushion.</h2>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.svg}>
            <ShieldSvg />
          </div>
          <h5 className={s.title}>Personal direction</h5>
          <span className={s.info}>
            We translate your habits, taste, and routines into a space that
            feels natural every day.
          </span>
        </li>
        <li className={s.item}>
          <div className={s.svg}>
            <BoxSvg />
          </div>
          <h5 className={s.title}>Practical layouts</h5>
          <span className={s.info}>
            Every room is planned around storage, light, movement, and the way
            people actually use it.
          </span>
        </li>
        <li className={s.item}>
          <div className={s.svg}>
            <GraphSvg />
          </div>
          <h5 className={s.title}>Curated materials</h5>
          <span className={s.info}>
            We source durable finishes, furniture, and lighting from trusted
            makers and suppliers.
          </span>
        </li>
        <li className={s.item}>
          <div className={s.svg}>
            <TimeSvg />
          </div>
          <h5 className={s.title}>Clear timelines</h5>
          <span className={s.info}>
            You get a realistic schedule, transparent milestones, and steady
            communication.
          </span>
        </li>
      </ul>
    </section>
  );
}
