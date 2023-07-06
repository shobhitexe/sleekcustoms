import { servicesPortfolioData } from "../data/constants/Services/servicesConstants";
import { Link } from "react-router-dom";

export default function PortfolioComponent() {
  return (
    <div className="mt-20 flex flex-col gap-5">
      <div className="flex ss:flex-row flex-col items-center justify-around">
        <div className="flex flex-col font-deluxe text-white">
          <p>PORTFOLIO</p>
          <p className="sm:text-[40px] text-[30px]">
            SEE THE RESULTS FOR YOURSELF
          </p>
        </div>
        <Link
          to={"/portfolio"}
          className="sm:px-36 px-20 border border-white w-fit text-white font-deluxe cursor-pointer"
        >
          VIEW PORTFOLIO
        </Link>
      </div>
      <div className="grid grid-flow-col">
        {servicesPortfolioData.map((data) => {
          return (
            <img
              src={data.image}
              alt={data.alt}
              key={data.alt}
              className="w-full h-full"
            />
          );
        })}
      </div>
    </div>
  );
}
