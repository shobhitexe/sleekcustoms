import { aboutparallexScrollableDivs } from "../../data/constants/About/aboutConstants";
import AboutScrollDiv from "./AboutScrollDiv";

export default function AboutParallex() {
  return (
    <div className="mt-40 w-[90%] mx-auto flex ss:flex-row flex-col gap-10">
      <div className="top-40 mt-0 ss:sticky ss:h-screen ss:w-[50%]">
        <img src="/about/about-2.png" alt="about-2" className="" />
      </div>

      <div className="flex ss:flex-col flex-row ss:w-[50%] ss:justify-end justify-center sm:gap-[500px] ss:gap-[100px] gap-10 flex-wrap sm:pb-[500px] ss:pb-[300px]  ss:pt-[100px]">
        {aboutparallexScrollableDivs.map((data) => {
          return (
            <AboutScrollDiv
              heading={data.heading}
              subHeading={data.subHeading}
              desc={data.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
