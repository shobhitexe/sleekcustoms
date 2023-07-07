export default function ProtectionPackage() {
  return (
    <div className="mt-20 w-[80%] mx-auto flex flex-col">
      <div className="flex items-end justify-between relative mb-10">
        <div className="w-full border border-white -bottom-2 border-opacity-40 absolute"></div>
        <div className="flex flex-col text-white font-deluxe mt-14 relative">
          <p className="text-[15px] absolute sm:-top-2 -top-3">PRICING</p>
          <p className="sm:text-[40px] text-[20px]">
            VIEW OUR CERAMIC COATING PACKAGES
          </p>
        </div>
        <div className="text-white font-Montserrat flex sm:gap-5 gap-2 sm:text-[15px] text-[12px]">
          <div className="border-b-2 text-priceText">Partial Frontend</div>
          <div>Full Frontend</div>
          <div>Track Package</div>
          <div>Full Car</div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 items-center">
        <div className="text-white flex flex-col gap-5">
          <h1 className="font-deluxe text-[30px]">PARTIAL FRONT END KIT</h1>
          <p className=" font-Montserrat opacity-50 text-[15px] w-[80%]">
            The partial front end package includes the bumper, 24 inches of
            protection to the front hood, protection to the fenders, and
            protection to the mirrors.
          </p>
          <div className="bg-white w-fit font-semibold mt-2 py-1 md:px-20 px-16 text-black md:text-[15px] text-[13px]">
            REQUEST A FREE QUOTE
          </div>
        </div>
        <img
          src="/PaintProtection/car.png"
          alt="car"
          className="sm:w-[50%] w-[80%] object-contain"
        />
      </div>
    </div>
  );
}
