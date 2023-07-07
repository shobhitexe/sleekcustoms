import { aboutparallexScrollableDivsType } from "../../data/constants/About/aboutTypes";

export default function AboutScrollDiv({
  heading,
  subHeading,
  desc,
}: aboutparallexScrollableDivsType) {
  return (
    <div className="text-white font-deluxe flex flex-col justify-center max-ss:items-center">
      <p className=" font-light tracking-widest sm:text-[15px] text-[13px]">
        {heading}
      </p>
      <h1 className="md:text-[50px] sm:text-[40px] text-[30px]">
        {subHeading}
      </h1>
      <p className=" font-Montserrat md:text-[14px] sm:text-[13px] text-[12px] opacity-70 w-[70%] max-ss:text-center">
        {desc}
      </p>
    </div>
  );
}
