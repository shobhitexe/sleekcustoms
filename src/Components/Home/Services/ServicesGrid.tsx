import { servicesData } from "../../../data/constants/Home/homeConstants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesGrid() {
  return (
    <div className="ss:grid flex flex-col grid-cols-2 gap-5 mt-16">
      {servicesData.map((data, idx) => {
        return (
          <Link to={data.link} key={data.title} className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.2,
                type: "spring",
                stiffness: 50,
                damping: 12,
              }}
              viewport={{ once: true, amount: 0.5 }}
              src={data.image}
              loading="lazy"
              className="rounded-lg"
              alt={data.title}
            />
            <div className="absolute rounded-b-lg bg-black bottom-0 w-full bg-opacity-70">
              <p className="text-white ss:py-3 py-1 ss:px-5 px-3 font-bebas tracking-wider sm:text-[18px] ss:text-[17px] text-[14px]">
                {data.title}
              </p>
            </div>
            {data.title === "CERAMIC COATING" && (
              <p className="absolute top-2 left-5 w-fit bg-black rounded-2xl text-white sm:text-[10px] text-[6px] px-2 py-1 font-Montserrat">
                RECOMMENDED
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}
