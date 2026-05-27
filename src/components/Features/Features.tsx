import s from "./Features.module.scss";

import ShieldSvg from "@/assets/icons/shield.svg?react";
import BoxSvg from "@/assets/icons/box.svg?react";
import GraphSvg from "@/assets/icons/graph.svg?react";
import TimeSvg from "@/assets/icons/time.svg?react";

export default function Features() {
  return (
    <ul className={s.root}>
      <li className={s.item}>
        <div className={s.svg}>
          <ShieldSvg />
        </div>
        <h5 className={s.title}>Personalized Approach</h5>
        <span className={s.info}>
          We listen to your needs and create a design that suits you.
        </span>
      </li>
      <li className={s.item}>
        <div className={s.svg}>
          <BoxSvg />
        </div>
        <h5 className={s.title}>Functional Spaces</h5>
        <span className={s.info}>
          We design spaces that are beautiful and practical.
        </span>
      </li>
      <li className={s.item}>
        <div className={s.svg}>
          <GraphSvg />
        </div>
        <h5 className={s.title}>High Quality</h5>
        <span className={s.info}>
          We use premium materials and trusted suppliers.
        </span>
      </li>
      <li className={s.item}>
        <div className={s.svg}>
          <TimeSvg />
        </div>
        <h5 className={s.title}>On Time</h5>
        <span className={s.info}>
          We deliver projects on time and within budget.
        </span>
      </li>
    </ul>
  );
}
