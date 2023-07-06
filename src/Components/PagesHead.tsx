type PagesHeadProps = {
  bgImage: string;
  heading1: string;
  heading2: string;
};

export default function PagesHead({
  bgImage,
  heading1,
  heading2,
}: PagesHeadProps) {
  return (
    <div className={`bg-${bgImage} ${" "} bg-cover relative bg-center`}>
      <div className=" absolute bg-black bottom-[-50px] w-full h-[100px] blur-xl"></div>
      <div className="bg-black bg-opacity-50">
        <div className="text-white font-deluxe pt-[300px] flex ss:flex-row flex-col items-center justify-around">
          <div className="flex flex-col relative sm:px-10 px-5">
            <p className="md:text-[20px] sm:text-[15px] text-[12px] absolute">
              {heading1}
            </p>
            <p className="md:text-[80px] sm:text-[50px] text-[40px]">
              {heading2}
            </p>
          </div>
          <div className="h-fit font-Montserrat text-[12px] font-semibold bg-white md:px-40 sm:px-28 px-20 w-fit text-black py-2 cursor-pointer z-10">
            BOOK NOW
          </div>
        </div>
      </div>
    </div>
  );
}
