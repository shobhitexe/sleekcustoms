import { servicesData } from "../../../data/constants/home-constants";

export default function ServicesGrid() {
  return (
    <div className="ss:grid flex flex-col grid-cols-2 gap-5 mt-16">
      {servicesData.map((data) => {
        return (
          <div key={data.title} className="relative">
            <img src={data.image} className="rounded-lg" alt={data.title} />
            <div className="absolute rounded-b-lg bg-black bottom-0 w-full bg-opacity-70">
              <p className="text-white ss:py-3 py-1 ss:px-5 px-3 font-bebas tracking-wider sm:text-[16px] ss:text-[15px] text-[12px]">
                {data.title}
              </p>
            </div>
            {data.title === "CERAMIC COATING" && (
              <p className="absolute top-2 left-5 w-fit bg-black rounded-2xl text-white sm:text-[10px] text-[6px] px-2 py-1 font-Montserrat">
                RECOMMENDED
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
