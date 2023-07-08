import ReviewCards from "../Components/Reviews/ReviewCards";
import { openInNewTab } from "./OpenLinks";

export default function Reviews() {
  return (
    <div className="mt-[100px] pb-[50px] flex flex-col gap-10">
      <div className="flex flex-col text-white font-deluxe">
        <p className="sm:text-[20px] text-[15px] text-center">OUR RESULTS</p>
        <h1 className="md:text-[60px] sm:text-[50px] text-[40px] text-center sm:tracking-wider tracking-wide">
          CUSTOMER REVIEWS
        </h1>
      </div>
      <ReviewCards />
      <div
        className="my-10 bg-cardsBg px-20 py-2 font-Montserrat text-white w-fit mx-auto cursor-pointer"
        onClick={() => openInNewTab("https://goo.gl/maps/fRVpUuFcwkzor3gx7")}
      >
        More Reviews....
      </div>
    </div>
  );
}
