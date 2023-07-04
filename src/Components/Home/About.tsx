export default function About() {
  return (
    <div className="ss:py-[100px] py-[50px] bg-about-bg  bg-cover bg-no-repeat flex ss:flex-row flex-col justify-center sm:gap-40 ss:gap-20 items-center">
      <img src="/about/PK.png" alt="pk" className="ss:w-[20%] w-[25%]" />
      <div className="flex flex-col justify-center">
        <p className="text-white text-left font-semibold sm:text-[15px] xs:text-[12px] text-[10px] capitalize opacity-70 font-Montserrat">
          ABOUT US
        </p>
        <p className="text-white font-bold md:text-[40px] sm:text-[35px] xs:text[30px] text-[25px] tracking-wide text-left font-deluxe">
          SLEEK CUSTOMS | EST. 2020
        </p>
        <p className="text-white text-left font-semibold md:text-[12px] sm:text-[10px] xs:text-[8px] text-[6px] md:w-[500px] sm:w-[400px] xs:w-[300px] w-[250px] capitalize opacity-70 font-Montserrat">
          Sleek Customs is the finest automotive detailing and car care studio
          in Houston, Texas. We specialize in paint protection film, nano
          ceramic coatings, paint correction, high-end detailing and paintless
          dent removal. Committed to customer satisfaction, our highly skilled
          specialists utilize cutting-edge technology and techniques to yield
          remarkable finishes and long term protection for each vehicle. We are
          conveniently located in the Galleria area, visit us at 6261 Richmond
          Avenue, Suite C, Houston, TX 77057.
        </p>
      </div>
    </div>
  );
}
