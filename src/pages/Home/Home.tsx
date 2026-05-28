import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import OurProjects from "../../components/OurProjects/OurProjects";
import Reviews from "../../components/Reviews/Reviews";

import s from "./Home.module.scss";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <OurProjects />
      <HowWeWork />
      <Reviews />
    </div>
  );
}
