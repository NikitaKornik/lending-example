import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./OurProjects.module.scss";

import { useState } from "react";
import { projects } from "../../data/projects";

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

export default function OurProjects() {
  const [active, setActive] = useState("All");

  function selectCategory(text: string) {
    setActive(text);
  }

  return (
    <section className={s.root}>
      <div className={s.heading}>
        <span>Selected work</span>
        <h2 className={s.h2}>Our Latest Projects</h2>
        <p>
          A small look at finished homes, calm palettes, tactile materials, and
          rooms designed to be lived in.
        </p>
      </div>
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
              <li key={project.id} className={s.project}>
                <Link
                  to={`/projects/${project.slug}`}
                  className={s.imgContainer}
                >
                  <img
                    className={s.img}
                    src={project.img}
                    alt={`${project.title} interior design project`}
                    loading="lazy"
                  />
                </Link>
                <Link className={s.a} to={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
                <span className={s.category}>
                  {project.category} / {project.design}
                </span>
              </li>
            );
          })}
      </ul>
      <Link className={s.btn} to="/projects">
        View All Projects
      </Link>
    </section>
  );
}
