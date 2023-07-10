import { navbarLinks } from "../data/constants/Home/homeConstants";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { openInNewTab } from "../Pages/OpenLinks";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full px-20 py-5 font-Montserrat flex justify-end align-middle fixed top-0 bg-black bg-opacity-50 backdrop-blur-sm z-20">
      <div className="w-28 h-28 absolute sm:left-20 ss:left-10 left-5 sm:top-5 ss:top-2 top-1">
        <Link to={"/"}>
          <motion.img
            initial={{ opacity: 0, translateY: "50px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            rel="preload"
            src="/SC-Logo-1.svg"
            className="sm:w-28 ss:w-24 w-20 sm:h-28 ss:h-24 h-20 z-20 bg-black p-2 rounded-full bg-opacity-50"
            alt="logo"
          />
        </Link>
      </div>

      <div className="sm:flex hidden md:gap-5 gap-3 items-center">
        {navbarLinks.map((nav) => {
          return (
            <div key={nav.title}>
              {nav.title === "Services" && window.location.pathname === "/" ? (
                <ScrollLink
                  to={"services"}
                  smooth={true}
                  duration={100}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                  className="text-white opacity-70 cursor-pointer md:text-[16px] text-[14px] hover:opacity-100"
                >
                  {nav.title}
                </ScrollLink>
              ) : (
                <Link
                  to={nav.link}
                  className="text-white opacity-70 cursor-pointer md:text-[16px] text-[14px] hover:opacity-100"
                >
                  {nav.title}
                </Link>
              )}
            </div>
          );
        })}
        <div
          className="bg-white md:px-10 px-8 py-1 cursor-pointer font-semibold"
          onClick={() =>
            openInNewTab("https://www.instagram.com/sleekcustomsgarage/")
          }
        >
          Book Now
        </div>
      </div>

      <img
        src={`/navbar/${isOpen ? "cross" : "ham"}.svg`}
        alt="cross"
        className="w-7 h-7 sm:hidden block cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          className="absolute sm:hidden block text-white font-Montserrat bg-black bg-opacity-80 w-full h-screen left-0 top-[68px] backdrop-blur-sm"
        >
          <div className="flex flex-col justify-center items-center gap-5 mt-10">
            {navbarLinks.map((nav) => {
              return (
                <div key={nav.title}>
                  {nav.title === "Services" &&
                  window.location.pathname === "/" ? (
                    <ScrollLink
                      to={"services"}
                      smooth={true}
                      duration={100}
                      offset={-70}
                      spy={true}
                      activeClass="active"
                      className=" text-[2rem] cursor-pointer"
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                    >
                      {nav.title}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={nav.link}
                      className=" text-[2rem] cursor-pointer"
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                    >
                      {" "}
                      {nav.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
