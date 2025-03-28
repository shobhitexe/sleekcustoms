import { openInNewTab } from "../../Pages/OpenLinks";
import { footerData } from "../../data/constants/Home/homeConstants";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div className="pt-[100px] pb-[50px] relative">
      <div className="absolute w-full z-0 h-[150px] left-0 top-[-100px] bg-black blur-3xl"></div>
      <div className="flex justify-around w-[90%] mx-auto">
        <div className="flex flex-col gap-10">
          <img
            src="/images/SC-Logo-1.svg"
            loading="lazy"
            alt="logo"
            className="sm:w-28 w-24 sm:h-28 h-24"
          />
          <div className="flex gap-5">
            {footerData.socials.map((data) => {
              return (
                <img
                  src={data.image}
                  loading="lazy"
                  key={data.title}
                  alt={data.title}
                  className=" cursor-pointer"
                  onClick={() => openInNewTab(data.link)}
                />
              );
            })}
          </div>
        </div>
        <div className="sm:flex grid ss:grid-cols-2 grid-cols-3 justify-end md:gap-10 gap-7 w-1/2">
          <FooterLinks linkData={footerData.pages} heading="Pages" />
          <FooterLinks linkData={footerData.services} heading="Services" />
          <FooterLinks linkData={footerData.misc} heading="Misc" />
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-Montserrat font-semibold text-[14px]">
              Business info
            </h1>
            <p className="text-white text-left ss:text-[11px] text-[11px] md:w-[300px] sm:w-[250px] ss:w-auto w-[180px] capitalize opacity-70 font-Montserrat">
              Car Detailing {"𝓢𝓵𝓮𝓮𝓴"} 𝓒𝓾𝓼𝓽𝓸𝓶𝓼 🚗🫧 Car cleaning | Paint
              protection film | Car polishing <br />
              <br />
              <span className="text-white text-left ss:text-[12px] text-[13px] capitalize opacity-70 font-Montserrat font-semibold">
                Address:{" "}
              </span>
              211 Cambuslang Road Glasgow, Lanarkshire G72 7TS United Kingdom
              John Hillhouse Industrial Estate, Unit 30, Car Detailing
              SleekCustoms
            </p>
            <p className="text-white text-left text-[13px]  capitalize opacity-70 font-Montserrat mt-3 ss:w-auto w-[100px]">
              <span className="text-white text-left text-[13px] capitalize opacity-70 font-Montserrat font-semibold">
                Monday to Friday:{" "}
              </span>
              8am-5pm
            </p>
            <a
              href="tel:07394463391"
              className="text-white text-left text-[13px] capitalize opacity-70 font-Montserrat mt-3 ss:w-auto w-[100px]"
            >
              07394463391
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" border w-[80%] mx-auto mt-10 border-opacity-50 opacity-20"></div>
      </div>
      <div className="flex mt-5 text-white font-Montserrat ss:text-[13px] text-[10px] justify-between w-[80%] mx-auto">
        <p
          className="cursor-pointer"
          onClick={() => openInNewTab("https://xtend.agency/")}
        >
          WEBSITE BY <span className="font-semibold">XTEND</span>
        </p>
        <p>Copyright 2023 All Rights Reserved</p>
      </div>
    </div>
  );
}
