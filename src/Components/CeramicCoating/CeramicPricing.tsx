import { motion } from "framer-motion";
import { PricingComponent } from "..";
import { ceramicCoatingPackagedata } from "../../data/constants/CeramicCoating/ceramicCoatingConstants";

export default function CeramicPricing() {
  return (
    <div className="mt-20 w-[80%] mx-auto">
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
          <div className="border-b-2 text-priceText">2 Door</div>
          <div>4 Door</div>
          <div>SUV</div>
          <div>Oversized</div>
        </div>
      </div>
      <PricingComponent detailsArr={ceramicCoatingPackagedata} />
    </div>
  );
}
