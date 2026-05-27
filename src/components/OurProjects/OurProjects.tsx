import Btn from "../ui/Btn/Btn";
import cn from "classnames";

import s from "./OurProjects.module.scss";

import test from "@/assets/images/test.jpg";
import hero from "@/assets/images/hero.jpg";
import { useState } from "react";

const filter = [
  {
    text: "All",
    key: 0,
  },
  {
    text: "Living Room",
    key: 1,
  },
  {
    text: "Kitchen",
    key: 2,
  },
  {
    text: "Bedroom",
    key: 3,
  },
  {
    text: "Bathroom",
    key: 4,
  },
];

const projects = [
  {
    title: "Minimalist Living Room",
    design: "Modern",
    url: "#",
    img: test,
    category: "Living Room",
    key: 0,
  },
  {
    title: "Elegant Kitchen",
    design: "Contemporan",
    url: "#",
    img: test,
    category: "Kitchen",
    key: 1,
  },
  {
    title: "Cozy Bedroom",
    design: "Scandinavien",
    url: "#",
    img: test,
    category: "Bedroom",
    key: 2,
  },
  {
    title: "Luxury Bathroom",
    design: "Modern",
    url: "#",
    img: test,
    category: "Bedroom",
    key: 3,
  },
  {
    title: "Dining Room",
    design: "Contemporary",
    url: "#",
    img: test,
    category: "Bathroom",
    key: 4,
  },
  {
    title: "Loft Interior",
    design: "Industrial",
    url: "#",
    img: test,
    category: "Bathroom",
    key: 5,
  },
];

type selectCategory = {};

export default function OurProjects() {
  const [active, setActive] = useState("All");

  function selectCategory(text: string) {
    setActive(text);
  }

  return (
    <div className={s.root}>
      <h2 className={s.h2}>Our Latest Projects</h2>
      <ul className={s.filter}>
        {filter.map((item) => {
          return (
            <li
              key={item.key}
              className={cn(s.filterItem, {
                [s.active]: active === item.text,
              })}
              onClick={() => selectCategory(item.text)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
      <ul className={s.projects}>
        {projects
          .filter((project) => {
            if (active === "All") return true;
            return project.category === active;
          })
          .slice(0, 6)
          .map((project) => {
            return (
              <li key={project.key} className={s.project}>
                <a href={project.url} className={s.imgContainer}>
                  <img className={s.img} src={hero} />
                </a>
                <a className={s.a} href="#">
                  {project.title}
                </a>
                <span className={s.category}>{project.category}</span>
              </li>
            );
          })}
      </ul>
      <Btn className={s.btn} variant="primary">
        View All Projects
      </Btn>
    </div>
  );
}
