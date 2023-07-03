import { navbarLinks } from "../data/constants";

export default function Navbar() {
  return (
    <div className="w-full px-20 py-5 font-Montserrat flex justify-end align-middle fixed top-0 bg-black bg-opacity-50 z-20">
      <div className="w-28 h-28 absolute left-20 top-5">
        <img
          src="/src/assets/SC-Logo-1.svg"
          className="w-28 h-28 z-20"
          alt="logo"
        />
      </div>

      <div className="flex md:gap-5 gap-3 items-center">
        {navbarLinks.map((nav) => {
          return (
            <div
              className="text-white opacity-70 cursor-pointer md:text-[16px] text-[14px]"
              key={nav.title}
            >
              {nav.title}
            </div>
          );
        })}
        <div className="bg-white md:px-10 px-8 py-1 cursor-pointer">
          Book Now
        </div>
      </div>
    </div>
  );
}
