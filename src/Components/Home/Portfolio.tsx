import { portfolioImages } from "../../data/constants/Home/homeConstants";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="flex sm:flex-row flex-col bg-black justify-between sm:pt-0 pt-[30px]">
      <div className="flex flex-col ss:gap-5 xs:gap-3 gap-1 mx-auto justify-center sm:pb-auto pb-[30px]">
        <p className="text-white text-left font-semibold md:text-[20px] ss:text-[15px] text-[10px] capitalize opacity-70 font-Montserrat">
          HAPPY MOMENTS
        </p>
        <p className="text-white font-bold md:text-[40px] ss:text-[35px] text-[30px] tracking-wide text-left font-deluxe">
          PORTFOLIO
        </p>
        <p className="text-white text-left font-semibold md:text-[15px] ss:text-[12px] text-[10px] capitalize opacity-70 font-Montserrat">
          Take a deeper look into
          <br /> our current and past <br /> projects.
        </p>
        <div className="bg-cardsBg text-white py-1 px-5 w-fit md:text-[12px] ss:text-[10px] text-[8px] font-Montserrat cursor-pointer">
          VIEW ALL
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-3 sm:w-[60%] w-auto">
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
                src={data.image}
                alt={data.title}
              />
              <p className="absolute w-fit font-semibold px-2 font-Montserrat md:text-[10px] ss:text-[8px] text-[6px] ss:bottom-5 bottom-3 ss:left-5 left-3 rounded-lg bg-white">
                {data.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
