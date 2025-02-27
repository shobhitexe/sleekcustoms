import { motion } from "framer-motion";
import { paintCorrectionPackagedataType } from "../data/constants/PaintCorrection/paintCorrectionTypes";
import { openInNewTab } from "../Pages/OpenLinks";

type PricingComponentProps = {
  detailsArr: paintCorrectionPackagedataType[];
};

export default function PricingComponent({
  detailsArr,
}: PricingComponentProps) {
  return (
    <div className="flex sm:flex-row flex-col sm:w-[80%] w-[90%] max-sm:items-center flex-wrap mx-auto text-center justify-center gap-10 mt-5">
      {detailsArr.map((data, idx) => {
        const stiff = idx * 10;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4 * idx,
              duration: 0.5,
              type: "spring",
              stiffness: 60 - stiff,
            }}
            key={idx}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white font-Montserrat flex flex-col border sm:w-[350px]"
          >
            <h1 className="font-deluxe text-[30px] border-b py-2 flex-1">
              {data.heading}
            </h1>
            <p className="text-left text-[12px] p-5 flex-1">{data.desc}</p>
            <ul
              className={`${
                data.pointers ? "pb-10" : ""
              } px-10 text-left text-[14px] font-Montserrat list-disc flex-1`}
            >
              {data.pointers?.map((points) => {
                return <li>{points}</li>;
              })}
            </ul>

            <p
              className="text-[15px] py-4 border-t cursor-pointer flex-1"
              onClick={() =>
                openInNewTab("https://www.instagram.com/sleekcustomsgarage/")
              }
            >
              See Details
            </p>
            <p className="text-priceText border-t py-3 flex-1">
              £{data.pricing}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
