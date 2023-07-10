import { motion } from "framer-motion";

export default function CeramicDifference() {
  return (
    <div className="my-24 w-[80%] mx-auto flex sm:flex-row flex-col sm:gap-0 gap-10 sm:text-left text-center items-center">
      <div className="flex flex-col text-white gap-5">
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
          className=" font-Montserrat font-semibold text-[14px]"
        >
          CERAMIC COATING VS <br /> PAINT PROTECTION FILM
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
          className=" font-deluxe text-[30px]"
        >
          WHAT'S THE DIFFERENCE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className=" font-Montserrat opacity-50 w-[70%] sm:mx-0 mx-auto text-[13px]"
        >
          There a lot of ceramic detailers out there that claim ceramic coating
          is a miracle product. We are here to tell you that it cannot solve
          every problem for your car. Sleek Customs wants our customers to be
          educated about a product before deciding if it's right for their
          vehicle. Here's the true benefits and differences between paint
          protection film and ceramic coating.
        </motion.p>
        <div className="flex items-center gap-5 sm:justify-start justify-center">
          <div className="w-[100px] border-b-2 border-white"></div>
          <p className=" font-Montserrat text-[15px] text-white">
            Ceramic Coating
          </p>
        </div>
        <div className="flex items-center gap-5 sm:justify-start justify-center">
          <div className="w-[100px] border-b-2 border-priceText"></div>
          <p className=" font-Montserrat text-[15px] text-white">
            Paint Protection Film
          </p>
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 60,
        }}
        viewport={{ once: true, amount: 0.5 }}
        src="/images/CeramicCoating/graph.webp"
        alt="graph"
        className=" object-contain w-[50%]"
      />
    </div>
  );
}
