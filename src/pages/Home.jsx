import Hero from "../sections/Hero";
import VacancyCounter from "../sections/VacancyCounter";
import Problem from "../sections/Problem";
import ThirdOption from "../sections/ThirdOption";
import Marquee from "../sections/Marquee";
import HowItWorks from "../sections/HowItWorks";
import RentSplitter from "../sections/RentSplitter";
import Benefits from "../sections/Benefits";
import Manifesto from "../sections/Manifesto";

export default function Home() {
  return (
    <>
      <Hero />
      <VacancyCounter />
      <Problem />
      <ThirdOption />
      <Marquee />
      <div id="how">
        <HowItWorks />
      </div>
      <RentSplitter />
      <Benefits />
      <Manifesto />
    </>
  );
}
