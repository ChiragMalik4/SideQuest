import React, { useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import "./CSS/Benefits.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img6 from "../assets/Benefits/img6.jpeg";
import img3 from "../assets/Benefits/3.jpeg";
import img5 from "../assets/Benefits/img5.jpeg";

const items = [
  {
    id: 1,
    img: img6,
    title: "Local Exploration",
    desc: "The app streamlines the process of finding desired landmarks, saving users time and effort.",
  },
  {
    id: 2,
    img: img3,
    title: "Supporting Local Business",
    desc: "The advertising platform enables local businesses to thrive by connecting them with potential customers in the area.",
  },

  {
    id: 3,
    img: img5,
    title: "Community Engagement",
    desc: "By facilitating volunteering opportunities, the app fosters a sense of community and encourages active participation in local initiatives.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="h-[100vh]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-full m-auto flex flex-col lg:flex-row lg:mx-8 xl:m-0 gap-[5px] lg:gap-[50px] justify-center items-center max-w-[1366px]">
          <div className="lg:flex-1 h-[50%]">
            <img
              src={item.img}
              alt={item.title}
              className="h-[90%] lg:h-[100%] lg:w-[100%] object-cover rounded-xl"
              ref={ref}
            />
          </div>
          <motion.div className="lg:flex-1 flex flex-col gap-[10px] lg:gap-[30px]">
            <h2 className="text-center text-[30px] lg:text-[30px] xl:text-[45px] font-bold">
              {item.title}
            </h2>

            <p className="text-center text-gray-400 text-[15px] px-2 lg:px-0 lg:text-[20px]">
              {item.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <Section className="" id="services">
      <div className="relative" ref={ref}>
        <div className="sticky top-0 pt-[7rem] text-center bg-n-8 z-10">
          <Heading
            title="Services"
            className="text-purple-400 mb-2 lg:mb-4"
          ></Heading>

          <motion.div
            style={{ scaleX }}
            className="h-[10px] bg-purple-300"
          ></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
