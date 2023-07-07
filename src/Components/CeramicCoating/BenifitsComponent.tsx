type BenifitsComponentProps = {
  heading: string;
  desc?: string;
  pointersArr: string[];
  gridArr: string[];
};

export default function BenifitsComponent({
  heading,
  desc,
  pointersArr,
  gridArr,
}: BenifitsComponentProps) {
  return (
    <div className="flex sm:flex-row flex-col-reverse sm:gap-0 gap-10 mt-20 w-full justify-between relative items-center">
      <div className="text-white flex flex-col gap-3 font-Montserrat w-[80%] md:pl-20 sm:pl-10 sm:text-left text-center">
        <div>
          <p className="text-[15px] font-deluxe"> BENIFITS</p>
          <h1 className="font-deluxe text-[30px]">{heading}</h1>
        </div>

        <p className="text-[13px] opacity-50 sm:w-[60%] w-[90%] sm:mx-0 mx-auto">
          {desc}
        </p>
        <div className="flex flex-col gap-2">
          {pointersArr.map((points, idx) => {
            return (
              <p key={idx} className=" font-Montserrat text-[12px]">
                {points}
              </p>
            );
          })}
        </div>
      </div>
      <div className="bg-ceramic-benifits-bg grid bg-cover bg-center bg-fixed grid-cols-2 items-center sm:w-[50%] w-[100%] sm:py-0 py-10 sm:absolute right-0 h-full">
        {gridArr.map((grid) => {
          return (
            <div className="flex flex-col items-center gap-3" key={grid}>
              <img src="/CeramicCoating/diamond.png" alt="diamond" />
              <h1 className="text-white font-deluxe text-[16px]">{grid}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
