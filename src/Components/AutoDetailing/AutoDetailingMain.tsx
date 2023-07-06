import { useState } from "react";
import { autoDetailingMainImagesData } from "../../data/constants/AutoDetailing/autoDetailingConstants";

export default function AutoDetailingMain() {
  const [selectedImage, setSelectedImage] = useState<string>("AD-3.png");

  return (
    <div className="w-[80%] mx-auto mt-[100px]">
      <div className="flex sm:flex-row flex-col">
        <img
          src={`/autoDetailing/${selectedImage}`}
          alt="AD-main"
          className="md:w-[60%] sm:w-[50%] object-contain"
        />
        <div className="flex flex-col text-white justify-center gap-1 lg:pl-20 pl-10 sm:mt-0 mt-7">
          <p className="font-deluxe">WHAT IS IT?</p>
          <h1 className="font-deluxe text-[30px]">COMPLETE AUTO DETAILING</h1>
          <p className="font-Montserrat md:text-[13px] text-[10px] md:w-[400px] sm:w-[300px] leading-relaxed opacity-60">
            At Sleek Customs, located in the prestigious Atlas Industrial Estate
            on Rutherglen Road, we take immense pride in our unrivaled expertise
            and passion for full car detailing. Our commitment to perfection is
            what sets us apart, ensuring that every vehicle that enters our
            doors receives the royal treatment it deserves. With our meticulous
            attention to detail and cutting-edge techniques, we transform cars
            into stunning works of art, restoring their original luster and
            beauty. From the moment you entrust your vehicle to our skilled
            hands, you can rest assured that it will receive the highest level
            of care, utilizing only the finest products and tools in the
            industry.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap gap-5 mt-10 justify-center mx-auto">
        {autoDetailingMainImagesData.map((data) => {
          return (
            <img
              src={`/autoDetailing/${data}`}
              alt={data}
              key={data}
              className=" cursor-pointer shadow-lg max-w-full w-[20%] basis-[30%]"
              onClick={() => {
                setSelectedImage(data);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
