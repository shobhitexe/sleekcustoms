import { Link } from "react-router-dom";
import { portfolioImages } from "../../data/constants/Home/homeConstants";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="flex sm:flex-row flex-col bg-black justify-between sm:pt-0 pt-[30px]">
      <div className="flex flex-col ss:gap-5 xs:gap-3 gap-1 mx-auto justify-center sm:pb-auto pb-[30px]">
        <p className="text-white text-left font-semibold md:text-[20px] ss:text-[15px] text-[13px] capitalize opacity-70 font-Montserrat">
          HAPPY MOMENTS
        </p>
        <p className="text-white font-bold md:text-[45px] ss:text-[40px] text-[35px] tracking-wide text-left font-deluxe">
          PORTFOLIO
        </p>
        <p className="text-white text-left font-semibold md:text-[17px] ss:text-[14px] text-[13px] capitalize opacity-70 font-Montserrat">
          Take a deeper look into
          <br /> our current and past <br /> projects.
        </p>
        <Link
          to={"/portfolio"}
          className="bg-cardsBg text-white py-1 px-5 w-fit text-[15px] sm:mt-2 mt-5 font-Montserrat cursor-pointer"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:w-[60%] w-auto">
        {portfolioImages.map((data, idx) => {
          return (
            <div key={data.title + idx} className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                }}
                viewport={{ once: true, amount: 0.5 }}
                src={data.image}
                loading="lazy"
                alt={data.title}
              />
              <p className="absolute w-fit font-semibold px-2 font-Montserrat md:text-[12px] text-[10px] ss:bottom-5 bottom-3 ss:left-5 left-3 rounded-lg bg-white">
                {data.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
