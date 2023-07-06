import { motion } from "framer-motion";
import ReviewCards from "./ReviewCards";

export default function ReviewHome() {
  return (
    <div className="py-[100px] flex flex-col gap-16">
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className="text-white text-center font-semibold text-[20px] capitalize opacity-70 font-Montserrat"
        >
          REVIEWS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className=" text-white font-bold text-[50px] text-center font-deluxe"
        >
          DELIVERING SATISFACTION
        </motion.h1>
      </div>
      <ReviewCards />
      <div className=" bg-cardsBg text-white py-1 px-10 w-fit mx-auto font-Montserrat cursor-pointer">
        VIEW MORE
      </div>
    </div>
  );
}
