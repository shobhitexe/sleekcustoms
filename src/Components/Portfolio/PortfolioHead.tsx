export default function PortfolioHead() {
  return (
    <div className="bg-portfolio-head bg-cover">
      <div className="bg-black bg-opacity-50">
        <div className="text-white font-deluxe pt-[300px] flex items-center justify-around">
          <div className="flex flex-col relative px-10">
            <p className="text-[20px] absolute">GLASGOW, UNITED KINGDOM</p>
            <p className="text-[100px]">DETAILING PORTFOLIO</p>
          </div>
          <div className="h-fit font-Montserrat text-[12px] font-semibold bg-white px-40 w-fit text-black py-2 cursor-pointer">
            BOOK NOW
          </div>
        </div>
      </div>
    </div>
  );
}
