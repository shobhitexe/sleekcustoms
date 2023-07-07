export default function AboutHead() {
  return (
    <div
      className={`bg-about-main-bg h-screen bg-cover relative bg-center flex justify-start items-center`}
    >
      <div className=" absolute bg-black bottom-[-50px] w-full h-[100px] blur-xl"></div>
      <div className="text-white flex flex-col font-Montserrat md:px-40 sm:px-20 px-10">
        <h1 className="font-semibold text-[20px]">ABOUT US</h1>
        <p className="ss:w-[400px]">
          Serving the need for extraordinary vehicle care in Glasgow. Bringing
          your vehicle care, Precision and great Services to make sure it leaves
          our detailing bay impressing the roads!
        </p>
      </div>
    </div>
  );
}
