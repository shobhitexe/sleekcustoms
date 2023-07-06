import { autoDetailingPackagesData } from "../../data/constants/AutoDetailing/autoDetailingConstants";

export default function DetailingPackages() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-end justify-between relative">
        <div className="w-full border border-white -bottom-2 border-opacity-40 absolute"></div>
        <div className="flex flex-col text-white font-deluxe mt-14 relative">
          <p className="text-[15px] absolute sm:-top-2 -top-3">PRICING</p>
          <p className="sm:text-[40px] text-[20px]">
            VIEW OUR DETAILING PACKAGES
          </p>
        </div>
        <div className="text-white font-Montserrat flex sm:gap-5 gap-2 sm:text-[15px] text-[12px]">
          <div className="border-b-2 text-priceText">2 Door</div>
          <div>4 Door</div>
          <div>SUV</div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 items-center mt-10 justify-around">
        {autoDetailingPackagesData.map((data, idx) => {
          return (
            <div
              className={`text-white flex flex-col sm:w-[350px] w-full border h-fit border-white border-opacity-30 shadow-sm shadow-white`}
            >
              <div
                className={`${
                  idx === 0 ? "" : "border-b"
                } w-full border-white border-opacity-30 ${
                  idx === 1 ? "py-4" : "py-2"
                }`}
              >
                <h1 className="text-[25px] font-deluxe tracking-wider text-center">
                  {data.heading}
                </h1>
                <p className="text-[10px] text-center">{data.sub_heading}</p>
              </div>
              <div
                className={`${
                  idx === 1 ? "p-7" : "p-5"
                } border-b border-white border-opacity-30 ${
                  idx === 0 ? "px-0" : ""
                }`}
              >
                <ul className="block list-disc">
                  {data.pointers.map((points) => {
                    return idx === 0 ? (
                      <div className=" bg-cardsBg px-5 py-3 border-b border-white border-opacity-30">
                        {points}
                      </div>
                    ) : (
                      <li className="text-[11px] py-1 font-Montserrat">
                        {points}
                      </li>
                    );
                  })}
                </ul>

                <p className=" font-Montserrat text-[11px] opacity-40 mt-5">
                  {data.other_info}
                </p>
              </div>
              <div className="flex flex-col p-3 items-center">
                <p className=" text-priceText font-Montserrat">£{data.price}</p>
                <div className=" font-Montserrat tracking-widest text-[14px] mt-5 bg-black cursor-pointer">
                  BOOK NOW
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
