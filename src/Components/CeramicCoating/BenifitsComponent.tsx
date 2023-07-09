import { motion } from "framer-motion";

type BenifitsComponentProps = {
  heading: string;
  desc?: string;
  pointersArr: string[];
  gridArr: string[];
};

export default function BenifitsComponent({
  heading,
  desc,
  pointersArr,
  gridArr,
}: BenifitsComponentProps) {
  return (
    <div className="flex sm:flex-row flex-col-reverse sm:gap-0 gap-10 mt-20 w-full justify-between relative items-center">
      <div className="text-white flex flex-col gap-3 font-Montserrat w-[80%] md:pl-20 sm:pl-10 sm:text-left text-center">
        <div>
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
            className="text-[15px] font-deluxe"
          >
            {" "}
            BENIFITS
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
            className="font-deluxe text-[30px]"
          >
            {heading}
          </motion.h1>
        </div>

        <p className="text-[13px] opacity-50 sm:w-[60%] w-[90%] sm:mx-0 mx-auto">
          {desc}
        </p>
        <div className="flex flex-col gap-2">
          {pointersArr.map((points, idx) => {
            return (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.1 * idx,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 60,
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={idx}
                className=" font-Montserrat text-[12px]"
              >
                {points}
              </motion.p>
            );
          })}
        </div>
      </div>
      <div className="bg-ceramic-benifits-bg grid bg-cover bg-center grid-cols-2 items-center sm:w-[50%] w-[100%] sm:py-0 py-10 sm:absolute right-0 h-full">
        {gridArr.map((grid, idx) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1 * idx,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center gap-3"
              key={grid}
            >
              <img src="/CeramicCoating/diamond.webp" alt="diamond" />
              <h1 className="text-white font-deluxe text-[16px]">{grid}</h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
