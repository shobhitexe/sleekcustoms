import { servicesGridData } from "../../data/constants/Services/servicesConstants";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  return (
    <div className="grid ss:grid-cols-2 grid-cols-1 md:mt-40 mt-32 md:w-[60%] sm:w-[80%] w-[90%] gap-10 mx-auto">
      {servicesGridData.map((data) => {
        return (
          <div
            key={data.title}
            className="font-deluxe text-white flex py-16 px-5 justify-center flex-col items-center gap-5 border border-white border-opacity-20"
          >
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
              className="md:text-[30px] text-[25px] break-all text-center"
            >
              {data.title}
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
              className="md:text-[25px] text-[20px] text-priceText"
            >
              {data.cost}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
