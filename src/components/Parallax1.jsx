import React, { useRef } from "react";
import Section from "./Section";
import Buildings from "../assets/Parallax/Buildings.png";
import Bridge from "../assets/Parallax/Bridge.png";
import Sky1 from "../assets/Parallax/sky1.jpg";
import Moon from "../assets/Parallax/Moon.png";
import skyGlow from "../assets/Parallax/Sky_Building_Glow.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax1 = ({ text }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 0.8], ["0%", "800%"]);
  const xMoon = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const yBuildings = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
  const xSky = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <Section id="Parallax1">
      <motion.div
        className="h-full w-full relative z-2 overflow-hidden sm:rounded-b-[0.9rem] rounded-t-[0.9rem]"
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <div className="relative flex justify-center items-center xl:h-[100vh]">
          <motion.div style={{ x: xMoon }} className="">
            <img src={Moon} alt="" className="h-full w-full" />
          </motion.div>

          <motion.div
            style={{ y: yBuildings }}
            className="absolute h-full w-full"
          >
            <img src={Buildings} alt="" className="h-full w-full" />
          </motion.div>

          <motion.div className="absolute h-full w-full z-4">
            <img src={Bridge} alt="" className="h-full w-full" />
          </motion.div>

          <motion.div style={{ y: yText }} className="absolute z-3">
            <div className="h1 text-[2rem] lg:text-[4.5rem] xl:text-[6rem]">
              {text}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Parallax1;
