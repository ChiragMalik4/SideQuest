import { motion } from "framer-motion";

const Text1 = ({ text }) => {
  return (
    <motion.div className="flex justify-center items-center space-x-4 xl:space-x-[20rem] my-[22rem] lg:my-[32rem] xl:my-[80rem]">
      <motion.div
        className="z-1 relative w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] xl:w-[100px] xl:h-[100px] bg-purple-500"
        initial={{ opacity: 0, rotate: -180, y: 80 }}
        whileInView={{ opacity: 1, rotate: 10, y: -100 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        className="z-10 relative text-lg lg:text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
      >
        <h5>{text}</h5>
      </motion.div>
      <motion.div
        className="z-1 w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] xl:w-[100px] xl:h-[100px] bg-pink-500"
        initial={{ opacity: 0, rotate: -180, y: 80 }}
        whileInView={{ opacity: 1, rotate: 40, y: -200 }}
        transition={{ duration: 4 }}
      ></motion.div>

      <motion.div
        className="z-1 absolute w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] xl:w-[65px] xl:h-[65px] bg-indigo-400 left-[13rem]"
        initial={{ opacity: 0, rotate: -180, y: 240 }}
        whileInView={{ opacity: 1, rotate: 60, y: 140 }}
        transition={{ duration: 4 }}
      ></motion.div>

      <motion.div
        className="z-1 absolute w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] xl:w-[65px] xl:h-[65px] bg-purple-500 right-[20rem]"
        initial={{ opacity: 0, rotate: -180, y: 240 }}
        whileInView={{ opacity: 1, rotate: 60, y: 100 }}
        transition={{ duration: 3 }}
      ></motion.div>
    </motion.div>
  );
};

export default Text1;
