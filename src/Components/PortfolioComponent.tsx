import { servicesPortfolioData } from "../data/constants/Services/servicesConstants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PortfolioComponent() {
  return (
    <div className="mt-20 flex flex-col gap-5">
      <div className="flex ss:flex-row flex-col items-center justify-around">
        <div className="flex flex-col font-deluxe text-white">
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
          >
            PORTFOLIO
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="sm:text-[40px] text-[30px] font-semibold"
          >
            SEE THE RESULTS FOR YOURSELF
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link
            to={"/portfolio"}
            className="sm:px-36 px-20 border py-1 border-white w-fit text-white font-deluxe cursor-pointer"
          >
            VIEW PORTFOLIO
          </Link>
        </motion.div>
      </div>
      <div className="grid grid-flow-col">
        {servicesPortfolioData.map((data, idx) => {
          return (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1 * idx,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true, amount: 0.5 }}
              src={data.image}
              loading="lazy"
              alt={data.alt}
              key={data.alt}
              className="w-full h-full"
            />
          );
        })}
      </div>
    </div>
  );
}
