import { aboutparallexScrollableDivs } from "../../data/constants/About/aboutConstants";
import AboutScrollDiv from "./AboutScrollDiv";
import { motion } from "framer-motion";

export default function AboutParallex() {
  return (
    <div className="mt-40 w-[90%] mx-auto flex ss:flex-row flex-col gap-10">
      <div className="top-40 mt-0 ss:sticky ss:h-screen ss:w-[50%]">
        <motion.img
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          src="/images/about/about-2.webp"
          loading="lazy"
          alt="about-2"
          className=""
        />
      </div>

      <div className="flex ss:flex-col flex-row ss:w-[50%] ss:justify-end justify-center sm:gap-[500px] ss:gap-[100px] gap-10 flex-wrap sm:pb-[500px] ss:pb-[300px]  ss:pt-[100px]">
        {aboutparallexScrollableDivs.map((data) => {
          return (
            <AboutScrollDiv
              heading={data.heading}
              subHeading={data.subHeading}
              desc={data.desc}
              key={data.heading}
            />
          );
        })}
      </div>
    </div>
  );
}
