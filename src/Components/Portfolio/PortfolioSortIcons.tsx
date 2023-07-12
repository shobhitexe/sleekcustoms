import {
  portfolioSelectionIcons,
  groupedIcons,
} from "../../data/constants/Portfolio/portfolioConstants";
import { portfolioSelectionIconsType } from "../../data/constants/Portfolio/portfolioTypes";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { motion } from "framer-motion";

type PortfolioHeadProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

export default function PortfolioSortIcons({ setFilter }: PortfolioHeadProps) {
  const [isSelected, setIsSelected] = useState<number>(-1);
  const [iconsArr, setIconsArr] = useState<portfolioSelectionIconsType[]>([]);

  useEffect(() => {
    const randomizeArr: portfolioSelectionIconsType[] =
      portfolioSelectionIcons.sort(() => Math.random() - 0.5);
    setIconsArr(randomizeArr);
  }, []);

  return (
    <div className="bg-black flex flex-col pb-14">
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
        className="text-white p-10 w-[90%] mt-5 mx-auto"
      >
        Browse by car make:{" "}
        <span className="md:hidden text-[12px]">
          Swipe right to browse more
        </span>
      </motion.h1>
      <div className="flex md:flex-wrap gap-10 w-[90%] mx-auto md:justify-center md:overflow-hidden overflow-x-scroll">
        {iconsArr.map((data, idx) => {
          if (!groupedIcons[data.tag]) return;
          return (
            <img
              key={data.tag}
              src={data.image}
              loading="lazy"
              alt={data.tag}
              className={`md:w-20 sm:w-16 ss:w-14 w-12 md:h-20 sm:h-16 ss:h-14 h-12 cursor-pointer ${
                idx === isSelected ? "bg-cardsBg px-4 rounded-md" : ""
              }`}
              onClick={() => {
                setFilter(data.tag);
                setIsSelected(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
