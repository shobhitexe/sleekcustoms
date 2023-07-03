export default function Hero() {
  const buttonClasses: string =
    "bg-white px-10 py-2 ss:text-[15px] text-[12px] font-Montserrat font-semibold cursor-pointer";

  return (
    <div className="bg-hero-main h-screen w-full bg-cover mx-auto">
      <div className=" bg-black h-screen sm:pt-[250px] pt-[200px] bg-opacity-30">
        <p className="text-white text-center font-semibold md:text-[26px] ss:text-[20px] text-[15px] capitalize opacity-70 font-Montserrat">
          PREMIUM AUTO DEALING
        </p>
        <p className="text-white font-bold md:text-[88px] sm:text-[70px] ss:text-[60px] xs:text-[50px] text-[40px] md:leading-[100px] ss:leading-[80px] xs:leading-[70px] leading-[50px] text-center font-deluxe">
          FALL IN LOVE WITH YOUR CAR <br /> ALL OVER AGAIN
        </p>

        <div className="mx-auto flex justify-center gap-5 mt-10">
          <div className={`${buttonClasses}`}>Book Today</div>
          <div className={`${buttonClasses} bg-opacity-20 text-white`}>
            View services
          </div>
        </div>
      </div>
    </div>
  );
}
