import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <div className="relative pb-20">
      <div className="absolute w-full z-0 h-[200px] left-0 top-[-100px] bg-black blur-3xl"></div>
      <div className="flex flex-col w-[80%] mx-auto">
        <div className="flex flex-col">
          <p className="text-white text-[15px] font-semibold capitalize opacity-70 font-Montserrat z-10">
            EXPERIENCE THE FINEST
          </p>
          <h1 className="text-white font-bold font-deluxe text-[40px] z-10">
            SLEEK CUSTOM SERVICES
          </h1>
          <div className="relative">
            <div className="absolute border w-full mt-5 border-opacity-30 border-white"></div>
          </div>
        </div>
        <ServicesGrid />
      </div>
    </div>
  );
}
