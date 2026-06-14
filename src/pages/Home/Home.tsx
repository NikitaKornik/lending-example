import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import OurProjects from "../../components/OurProjects/OurProjects";
import Reviews from "../../components/Reviews/Reviews";
import { FadeIn } from "../../components/ui/animations/Reveal/Reveal";

export default function Home() {
  return (
    <div>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <Features />
      </FadeIn>
      <FadeIn>
        <OurProjects />
      </FadeIn>
      <FadeIn>
        <HowWeWork />
      </FadeIn>
      <FadeIn>
        <Reviews />
      </FadeIn>
    </div>
  );
}
