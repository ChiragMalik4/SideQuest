import Section from "./Section";
import ideas from "../constants/ideas.js";
import { Card, Comingsoon } from "./Card";
import Heading from "./Heading.jsx";
import pattern2 from "../assets/Patterns/pattern2.png";

const Roadmap = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <img src={pattern2} alt="" />
        <img src={pattern2} className="mb-8" alt="" />
      </div>
      <Heading className="text-center" title="Roadmap" id="roadmap"></Heading>
      <div className="flex flex-col gap-[3rem] md:flex-wrap md:flex-row md:gap-[2rem] md:mx-[2rem] xl:mx-0 xl:gap-[8rem] justify-center items-center">
        {ideas.map((idea) => (
          <Card img={idea.img} title={idea.title} desc={idea.desc} />
        ))}
        <Comingsoon title="Coming Soon" />
        <Comingsoon title="Coming Soon" />
      </div>
    </Section>
  );
};

export default Roadmap;
