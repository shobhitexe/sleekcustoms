import { aboutparallexScrollableDivsType } from "../../data/constants/About/aboutTypes";
import { motion } from "framer-motion";

export default function AboutScrollDiv({
  heading,
  subHeading,
  desc,
}: aboutparallexScrollableDivsType) {
  return (
    <div className="text-white font-deluxe flex flex-col justify-center max-ss:items-center">
      <p className=" font-light tracking-widest sm:text-[15px] text-[13px]">
        {heading}
      </p>
      <motion.h1
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 50,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="md:text-[50px] sm:text-[40px] text-[30px]"
      >
        {subHeading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          type: "spring",
          stiffness: 40,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className=" font-Montserrat md:text-[14px] sm:text-[13px] text-[12px] opacity-70 w-[70%] max-ss:text-center"
      >
        {desc}
      </motion.p>
    </div>
  );
}
