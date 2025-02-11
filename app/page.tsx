import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Projects from "./projects/page";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <div className="relative flex flex-col p-5 pr-5 text-center text-6xl md:py-5 md:text-7xl lg:pr-10 lg:text-start lg:text-8xl">
      <Hero />
      <FeatureCards />
      <FadeIn delay={0.4}>
        <Projects />
      </FadeIn>
    </div>
  );
}
