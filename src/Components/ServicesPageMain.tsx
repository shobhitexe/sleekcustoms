import { useState } from "react";

type ServicesPageMainProps = {
  defaultImage: string;
  arrImages: string[];
  heading: string;
  paragraph: string;
};

export default function ServicesPageMain({
  defaultImage,
  arrImages,
  heading,
  paragraph,
}: ServicesPageMainProps) {
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);

  return (
    <div className="w-[80%] mx-auto mt-[100px]">
      <div className="flex sm:flex-row flex-col">
        <img
          src={`ServicesComponent/${selectedImage}`}
          alt="AD-main"
          className="md:w-[60%] sm:w-[50%] object-contain"
        />
        <div className="flex flex-col text-white justify-center gap-1 lg:pl-20 pl-10 sm:mt-0 mt-7">
          <p className="font-deluxe">WHAT IS IT?</p>
          <h1 className="font-deluxe text-[30px]">{heading}</h1>
          <p className="font-Montserrat md:text-[13px] text-[10px] md:w-[400px] sm:w-[300px] leading-relaxed opacity-60">
            {paragraph}
          </p>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap gap-5 mt-10 justify-center mx-auto">
        {arrImages.map((data) => {
          return (
            <img
              src={`/ServicesComponent/${data}`}
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
