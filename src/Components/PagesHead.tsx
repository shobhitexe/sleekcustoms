import { motion } from "framer-motion";
import { openInNewTab } from "../Pages/OpenLinks";

type PagesHeadProps = {
  bgImage: string;
  heading1: string;
  heading2: string;
};

export default function PagesHead({
  bgImage,
  heading1,
  heading2,
}: PagesHeadProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50px", scale: 0.9 }}
      whileInView={{ opacity: 1, translateY: "0px", scale: 1 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 60,
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={`${bgImage} ${" "} bg-cover relative bg-center`}
    >
      <div className=" absolute bg-black bottom-[-50px] w-full h-[100px] blur-xl"></div>
      <div className="bg-black bg-opacity-50">
        <div className="text-white font-deluxe pt-[300px] flex ss:flex-row flex-col items-center justify-around">
          <div className="flex flex-col relative sm:px-10 px-5">
            <motion.p
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="md:text-[20px] sm:text-[15px] text-[14px] absolute sm:top-0 -top-2"
            >
              {heading1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="md:text-[80px] sm:text-[50px] text-[40px]"
            >
              {heading2}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.5 }}
            onClick={() =>
              openInNewTab("https://www.instagram.com/sleekcustomsgarage/")
            }
            className="h-fit font-Montserrat text-[12px] font-semibold bg-white md:px-40 sm:px-28 px-20 w-fit text-black py-2 cursor-pointer z-10"
          >
            BOOK NOW
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
