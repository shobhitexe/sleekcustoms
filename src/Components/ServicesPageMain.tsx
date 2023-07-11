import { useState } from "react";
import { motion } from "framer-motion";

type ServicesPageMainProps = {
  defaultImage: string;
  arrImages: string[];
  heading: string;
  paragraph: string;
};

export default function ServicesPageMain({
  defaultImage,
  arrImages,
  heading,
  paragraph,
}: ServicesPageMainProps) {
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);

  return (
    <div className="w-[80%] mx-auto mt-[100px]">
      <div className="flex sm:flex-row flex-col">
        {selectedImage === "CeramicCoatingDefault.webp" ? (
          <iframe
            src="https://www.youtube.com/embed/dpqVKHSZFYs"
            loading="lazy"
            className="md:w-[60%] sm:w-[50%] object-contain sm:h-auto ss:h-72 xs:h-60 h-52"
            title="All about Onyx Coating!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : (
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
            src={`/images/ServicesComponent/${selectedImage}`}
            loading="lazy"
            alt="AD-main"
            className="md:w-[60%] sm:w-[50%] object-contain"
          />
        )}
        <div className="flex flex-col text-white justify-center gap-1 lg:pl-20 pl-10 sm:mt-0 mt-7">
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
            className="font-deluxe"
          >
            WHAT IS IT?
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
            className="font-deluxe text-[30px] font-semibold"
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              type: "spring",
              stiffness: 40,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-Montserrat md:text-[15px] text-[12px] md:w-[400px] sm:w-[300px] leading-relaxed opacity-60"
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap gap-5 mt-10 justify-center mx-auto">
        {arrImages.map((data, idx) => {
          return (
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1 * idx,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true, amount: 0.5 }}
              src={`/images/ServicesComponent/${data}`}
              loading="lazy"
              alt={data}
              key={data}
              className=" cursor-pointer shadow-lg max-w-full ss:w-[20%] w-[45%] basis-[30%]"
              onClick={() => {
                setSelectedImage(data);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
