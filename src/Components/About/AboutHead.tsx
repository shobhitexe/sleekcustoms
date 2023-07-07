import { motion } from "framer-motion";

export default function AboutHead() {
  return (
    <div
      className={`bg-about-main-bg h-screen bg-cover relative bg-center flex justify-start items-center`}
    >
      <div className=" absolute bg-black bottom-[-50px] w-full h-[100px] blur-xl"></div>
      <div className="text-white flex flex-col font-Montserrat md:px-40 sm:px-20 px-10">
        <motion.h1
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-semibold text-[20px]"
        >
          ABOUT US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 40,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="ss:w-[400px]"
        >
          Serving the need for extraordinary vehicle care in Glasgow. Bringing
          your vehicle care, Precision and great Services to make sure it leaves
          our detailing bay impressing the roads!
        </motion.p>
      </div>
    </div>
  );
}
