import { detailingAddonsData } from "../../data/constants/AutoDetailing/autoDetailingConstants";

export default function DetailingAddons() {
  return (
    <div className="w-[80%] mx-auto mt-20 flex flex-col">
      <div className="text-white border-b border-white border-opacity-30">
        <p className="text-[13px] font-semibold font-Montserrat">ADD ONS</p>
        <h1 className="text-[40px] font-deluxe">ADDITIONAL PACKAGES</h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-around mt-5 text-center gap-5">
        {detailingAddonsData.map((data) => {
          return (
            <div className="text-white border border-white border-opacity-30 xs:w-[350px] w-full mx-auto flex flex-col py-5 gap-5">
              <div className=" font-deluxe text-[25px]">{data.heading}</div>
              <div className=" font-Montserrat border-y py-5 border-white border-opacity-30">
                See Details
              </div>
              <div className="font-Montserrat text-priceText">{data.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
