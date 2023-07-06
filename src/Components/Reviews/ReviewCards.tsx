import { reviewsData } from "../../data/constants/Home/homeConstants";

export default function ReviewCards() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-cardsBg py-3 px-5 rounded-lg w-[80%] mx-auto flex items-center relative">
        <div className="gap-2 flex">
          <div className="border-b-2 absolute bottom-0 w-[120px]"></div>
          <img src="/reviews/google.png" alt="google" />
          <p className="font-Montserrat text-white">
            Google <span className=" font-semibold">5.0</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {reviewsData.map((data, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col bg-cardsBg gap-5 ss:w-[400px] w-[80%] p-5 rounded-2xl"
            >
              <h1 className="text-white font-Montserrat">{data.title}</h1>
              <p className="text-white text-[11px] capitalize opacity-70 font-Montserrat">
                {data.description}
              </p>
              <div className="flex justify-between">
                <p className="text-white">{data.name}</p>
                <img src={data.logo} alt={data.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
