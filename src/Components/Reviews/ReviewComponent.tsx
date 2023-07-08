import { Link } from "react-router-dom";
import ReviewCards from "./ReviewCards";

export default function ReviewComponent() {
  return (
    <div className="flex flex-col pb-20">
      <div className="flex flex-col font-deluxe text-white items-center mt-14 gap-2 mb-10">
        <p className="text-[15px]">REVIEWS</p>
        <p className="text-[40px] text-center font-semibold">
          HUNDEREDS OF HAPPY CUSTOMERS
        </p>
        <Link to={"/customer-reviews"} className="px-12 border-2 w-fit">
          VIEW MORE
        </Link>
      </div>
      <ReviewCards max={5} />
    </div>
  );
}
