import { motion } from "framer-motion";

type HeroProps = {
  scrollToServices: () => void;
};

export default function Hero({ scrollToServices }: HeroProps) {
  const buttonClasses =
    "bg-white px-10 py-2 ss:text-[15px] text-[12px] font-Montserrat font-semibold cursor-pointer";

  return (
    <div className="sm:bg-hero-main bg-hero-mob h-screen w-full  bg-center bg-cover mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          type: "spring",
          stiffness: 20,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className=" bg-black h-screen sm:pt-[250px] pt-[200px] bg-opacity-30"
      >
        <motion.p
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white text-center font-semibold md:text-[26px] ss:text-[20px] text-[15px] capitalize opacity-70 font-Montserrat"
        >
          PREMIUM AUTO DEALING
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: "20%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white font-bold md:text-[88px] sm:text-[70px] ss:text-[60px] xs:text-[50px] text-[40px] md:leading-[100px] ss:leading-[80px] xs:leading-[70px] leading-[50px] text-center font-deluxe"
        >
          FALL IN LOVE WITH YOUR CAR <br /> ALL OVER AGAIN
        </motion.p>

        <div className="mx-auto flex justify-center gap-5 mt-10">
          <motion.a
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 40,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={`${buttonClasses}`}
            href="tel:+447394463391"
          >
            Book Today
          </motion.a>

          <motion.div
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 40,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={`${buttonClasses} bg-opacity-20 text-white`}
            onClick={scrollToServices}
          >
            View services
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
