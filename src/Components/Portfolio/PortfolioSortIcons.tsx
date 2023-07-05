import { portfolioSelectionIcons } from "../../data/constants/Portfolio/portfolioConstants";
import { Dispatch, SetStateAction, useState } from "react";
type PortfolioHeadProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

export default function PortfolioSortIcons({ setFilter }: PortfolioHeadProps) {
  const [isSelected, setIsSelected] = useState<number>(-1);

  return (
    <div className="bg-black flex flex-col pb-14">
      <h1 className="text-white p-10 w-[90%] mx-auto">Browse by car make:</h1>
      <div className="md:flex grid grid-rows-1 grid-flow-col md:flex-wrap gap-10 w-[90%] mx-auto justify-center md:overflow-hidden overflow-x-scroll">
        {portfolioSelectionIcons.map((data, idx) => {
          return (
            <img
              key={data.tag}
              src={data.image}
              alt={data.tag}
              className={`w-20 h-20 cursor-pointer ${
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
