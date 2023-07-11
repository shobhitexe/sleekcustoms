import { motion } from "framer-motion";

export default function ProtectionPackage() {
  return (
    <div className="mt-20 w-[80%] mx-auto flex flex-col">
      <div className="flex items-end justify-between relative mb-10">
        <div className="w-full border border-white -bottom-2 border-opacity-40 absolute"></div>
        <div className="flex flex-col text-white font-deluxe mt-14 relative">
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
            className="text-[15px] absolute sm:-top-2 -top-3"
          >
            PRICING
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 50,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="sm:text-[40px] text-[20px]"
          >
            VIEW OUR CERAMIC COATING PACKAGES
          </motion.p>
        </div>
        <div className="text-white font-Montserrat flex sm:gap-5 gap-2 sm:text-[15px] text-[12px]">
          <div className="border-b-2 text-priceText">Partial Frontend</div>
          <div>Full Frontend</div>
          <div>Track Package</div>
          <div>Full Car</div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 items-center">
        <div className="text-white flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 40,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-deluxe text-[30px]"
          >
            PARTIAL FRONT END KIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className=" font-Montserrat opacity-50 text-[15px] w-[80%]"
          >
            The partial front end package includes the bumper, 24 inches of
            protection to the front hood, protection to the fenders, and
            protection to the mirrors.
          </motion.p>
          <div className="bg-white w-fit font-semibold mt-2 py-1 md:px-20 px-16 text-black md:text-[15px] text-[13px]">
            REQUEST A FREE QUOTE
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          src="/images/PaintProtection/car.webp"
          loading="lazy"
          alt="car"
          className="sm:w-[50%] w-[80%] object-contain"
        />
      </div>
    </div>
  );
}
