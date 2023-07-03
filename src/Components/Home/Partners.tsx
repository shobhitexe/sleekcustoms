import { partnersImages } from "../../data/constants";

export default function Partners() {
  return (
    <div className="bg-partners-bg bg-cover bg-no-repeat w-full mx-auto md:py-[100px] ss:py-[30px] py-[10px]">
      <div className="flex flex-col">
        <p className="text-white text-center font-semibold sm:text-[20px] ss:text-[15px] text-[12px] capitalize opacity-70 font-Montserrat">
          OUR PARTNERS
        </p>
        <h1 className=" text-white font-bold sm:text-[45px] ss:text-[40px] text-[30px] text-center font-deluxe">
          CERTIFIED INSTALLERS
        </h1>
        <p className="text-white text-center sm:text-[20px] ss:text-[15px] text-[10px] sm:leading-[25px] ss:leading-[20px] leading-[12px] mx-auto capitalize opacity-70 font-Montserrat">
          Serving the need for extraordinary vehicle care in <br />
          Glasgow. Bringing your vehicle care, precision and great
          <br /> service to make sure it leaves our detailing bay <br />
          impressing the roads!
        </p>

        <div className="flex justify-center sm:gap-32 ss:gap-28 gap-24 ss:mt-14 mt-10">
          {partnersImages.map((data) => {
            return (
              <img
                key={data.alt}
                src={data.image}
                alt={data.alt}
                className="sm:max-w-[17%] max-w-[15%]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
