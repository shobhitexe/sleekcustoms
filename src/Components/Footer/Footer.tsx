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
            src="/SC-Logo-1.svg"
            alt="logo"
            className="sm:w-28 w-24 sm:h-28 h-24"
          />
          <div className="flex gap-5">
            {footerData.socials.map((data) => {
              return (
                <img
                  src={data.image}
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
            <h1 className="text-white font-Montserrat font-semibold text-[12px]">
              Business info
            </h1>
            <p className="text-white text-left ss:text-[11px] text-[9px] md:w-[300px] sm:w-[250px] ss:w-auto w-[180px] capitalize opacity-70 font-Montserrat">
              <span className="text-white text-left ss:text-[11px] text-[9px] capitalize opacity-70 font-Montserrat font-semibold">
                Address:{" "}
              </span>
              Unit 138, Atlas Industrial Estate, 1 Rutherglen Road, Rutherglen,
              Glasgow G73 1SX, United Kingdom.
            </p>
            <p className="text-white text-left ss:text-[11px] text-[9px] capitalize opacity-70 font-Montserrat mt-3 ss:w-auto w-[100px]">
              <span className="text-white text-left ss:text-[11px] text-[9px] capitalize opacity-70 font-Montserrat font-semibold">
                Mon-Sun:{" "}
              </span>
              8:00 AM to 6:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" border w-[80%] mx-auto mt-10 border-opacity-50 opacity-20"></div>
      </div>
      <div className="flex mt-5 text-white font-Montserrat ss:text-[13px] text-[10px] justify-between w-[80%] mx-auto">
        <p>
          WEBSITE BY <span className="font-semibold">XTEND</span>
        </p>
        <p>Copyright 2023 All Rights Reserved</p>
      </div>
    </div>
  );
}
