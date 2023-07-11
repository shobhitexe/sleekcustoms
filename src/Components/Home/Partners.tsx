import { partnersImages } from "../../data/constants/Home/homeConstants";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <div className="bg-partners-bg bg-cover bg-no-repeat  w-full mx-auto md:py-[100px] ss:py-[50px] py-[30px] bg-fixed bg-center">
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white text-center font-semibold sm:text-[20px] ss:text-[15px] text-[12px] capitalize opacity-70 font-Montserrat"
        >
          OUR PARTNERS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 70,
            damping: 10,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className=" text-white font-bold sm:text-[45px] ss:text-[40px] text-[30px] text-center font-deluxe"
        >
          CERTIFIED INSTALLERS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white text-center sm:text-[20px] ss:text-[13px] text-[12px] sm:leading-[25px] ss:leading-[20px] leading-[16px] mx-auto capitalize opacity-70 font-Montserrat"
        >
          Serving the need for extraordinary vehicle care in <br />
          Glasgow. Bringing your vehicle care, precision and great
          <br /> service to make sure it leaves our detailing bay <br />
          impressing the roads!
        </motion.p>

        <div className="flex justify-around w-[95%] mx-auto  ss:mt-14 mt-10">
          {partnersImages.map((data, idx) => {
            return (
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={data.alt}
                src={data.image}
                loading="lazy"
                alt={data.alt}
                className="lg:w-[250px] md:h-[70px] sm:h-[60px] ss:h-[50px] xs:h-[40px] h-[30px] sm:w-[180px] ss:w-[150px] xs:w-[120px] w-[100px]"
              />
              // lg:w-[250px] md:h-[70px] sm:h-[60px] ss:h-[50px] xs:h-[40px] h-[30px] sm:w-[180px] ss:w-[150px] xs:w-[120px] w-[100px]
            );
          })}
        </div>
      </div>
    </div>
  );
}
