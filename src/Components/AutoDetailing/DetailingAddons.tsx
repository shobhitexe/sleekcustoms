import { openInNewTab } from "../../Pages/OpenLinks";
import { detailingAddonsData } from "../../data/constants/AutoDetailing/autoDetailingConstants";
import { motion } from "framer-motion";

export default function DetailingAddons() {
  return (
    <div className="w-[80%] mx-auto mt-20 flex flex-col">
      <div className="text-white border-b border-white border-opacity-30">
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
          className="text-[13px] font-semibold font-Montserrat"
        >
          ADD ONS
        </motion.p>
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
          className="text-[40px] font-deluxe font-semibold"
        >
          ADDITIONAL PACKAGES
        </motion.h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-around mt-5 text-center gap-5">
        {detailingAddonsData.map((data, idx) => {
          const stiff = idx * 10;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2 * idx,
                duration: 0.5,
                type: "spring",
                stiffness: 60 - stiff,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white border border-white border-opacity-30 xs:w-[350px] w-full mx-auto flex flex-col py-5 gap-5"
            >
              <div className=" font-deluxe text-[25px]">{data.heading}</div>
              <div
                onClick={() =>
                  openInNewTab("https://www.instagram.com/sleekcustomsgarage/")
                }
                className=" font-Montserrat border-y py-5 border-white border-opacity-30 cursor-pointer"
              >
                See Details
              </div>
              <div className="font-Montserrat text-priceText">{data.price}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
