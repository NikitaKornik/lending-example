import s from './HowWeWork.module.scss'

export default function HowWeWork() {
  return (
    <div className={s.root}>
      <h2 className={s.h2}>How We Work</h2>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.step}>01</div>
          <h3 className={s.h3}>Consultation</h3>
          <div className={s.desc}>We descuse your ideas, needs and budget</div>
        </li>
        <li className={s.listItem}>
          <div className={s.step}>02</div>
          <h3 className={s.h3}>Concept</h3>
          <div className={s.desc}>We create a conceptand visual directions</div>
        </li>
        <li className={s.listItem}>
          <div className={s.step}>03</div>
          <h3 className={s.h3}>Design</h3>
          <div className={s.desc}>We develop the design width attention to detail</div>
        </li>
        <li className={s.listItem}>
          <div className={s.step}>04</div>
          <h3 className={s.h3}>Execution</h3>
          <div className={s.desc}>We bring the design to life with quality</div>
        </li>
      </ul>
    </div>
  )
}
