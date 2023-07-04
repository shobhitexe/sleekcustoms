export default function Contact() {
  const buttonClasses: string =
    "bg-white sm:px-10 px-8 py-2 ss:text-[12px] ss:text-[10px] text-[8px] font-Montserrat font-semibold cursor-pointer";

  return (
    <div className="sm:py-[200px] py-[150px]  w-full bg-no-repeat flex flex-col bg-contact-bg bg-cover items-center justify-center">
      <p className="text-white text-left font-semibold sm:text-[20px] text-[15px] capitalize opacity-70 font-Montserrat">
        CONTACT US
      </p>
      <p className="text-white font-bold sm:text-[50px] ss:text-[40px] text-[30px] tracking-wide text-left font-deluxe">
        GET A FREE QUOTE TODAY
      </p>
      <div className="mx-auto flex justify-center gap-5 sm:mt-10 mt-5">
        <div className={`${buttonClasses}`}>Book Today</div>
        <div className={`${buttonClasses} bg-opacity-20 text-white`}>
          View services
        </div>
      </div>
    </div>
  );
}
