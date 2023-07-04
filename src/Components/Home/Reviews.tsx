import { reviewsData } from "../../data/constants/home-constants";
import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <div className="py-[100px] flex flex-col gap-16">
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className="text-white text-center font-semibold text-[20px] capitalize opacity-70 font-Montserrat"
        >
          REVIEWS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className=" text-white font-bold text-[50px] text-center font-deluxe"
        >
          DELIVERING SATISFACTION
        </motion.h1>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {reviewsData.map((data) => {
          return (
            <div
              key={data.title}
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
      <div className=" bg-cardsBg text-white py-1 px-10 w-fit mx-auto font-Montserrat cursor-pointer">
        VIEW MORE
      </div>
    </div>
  );
}
