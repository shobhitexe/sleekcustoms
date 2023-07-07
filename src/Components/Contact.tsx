import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { openInNewTab } from "../Pages/OpenLinks";

export default function Contact() {
  const buttonClasses: string =
    "bg-white sm:px-10 px-8 py-2 ss:text-[12px] ss:text-[10px] text-[8px] font-Montserrat font-semibold cursor-pointer";

  return (
    <div className="sm:py-[200px] py-[150px] w-full bg-no-repeat flex flex-col bg-contact-bg bg-fixed bg-cover bg-center items-center justify-center">
      <motion.p
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          damping: 10,
        }}
        className="text-white text-left font-semibold sm:text-[20px] text-[15px] capitalize opacity-70 font-Montserrat"
      >
        CONTACT US
      </motion.p>
      <motion.p
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          damping: 10,
        }}
        className="text-white font-bold sm:text-[50px] ss:text-[40px] text-[30px] tracking-wide text-left font-deluxe"
      >
        GET A FREE QUOTE TODAY
      </motion.p>
      <div className="mx-auto flex justify-center gap-5 sm:mt-10 mt-5">
        <motion.div
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className={`${buttonClasses}`}
          onClick={() =>
            openInNewTab("https://www.instagram.com/sleekcustomsgarage/")
          }
        >
          Book Today
        </motion.div>
        <Link to={"/more-services"}>
          <motion.div
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              damping: 10,
            }}
            className={`${buttonClasses} bg-opacity-20 text-white`}
          >
            View services
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
