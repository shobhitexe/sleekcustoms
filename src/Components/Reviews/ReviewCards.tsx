import { motion } from "framer-motion";
import { openInNewTab } from "../../Pages/OpenLinks";
import { reviewsData } from "../../data/constants/Reviews/ReviewConstants";

type ReviewCardsProps = {
  max?: number;
};

export default function ReviewCards({
  max = reviewsData.length,
}: ReviewCardsProps) {
  const googleImage: string = `/images/reviews/google.svg`;
  const starImage: string = `/images/reviews/star.webp`;
  const reviewsArr: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center gap-10 flex-wrap">
      {reviewsData
        .sort(() => 0.5 - Math.random())
        .map((data, idx) => {
          if (idx + 1 > max) return;

          const descCut = data.description.split(" ").slice(0, 20);
          const formattedDesc = descCut.join(` `) + " " + "....";
          return (
            <motion.div
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              key={idx}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col w-[250px] cursor-pointer"
              onClick={() => openInNewTab(data.link)}
            >
              <div className="flex flex-col bg-cardsBg p-5 rounded-3xl gap-5 ">
                <div className="flex">
                  {reviewsArr.map((data, idx) => {
                    return (
                      <motion.img
                        initial={{ opacity: 0, translateY: "20px" }}
                        whileInView={{ opacity: 1, translateY: "0px" }}
                        transition={{
                          delay: 0.4 * idx,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 60,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src={starImage}
                        loading="lazy"
                        alt={`star-${data}`}
                        key={idx}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-Montserrat text-[14px]">
                    {formattedDesc}
                  </p>
                  <p className=" font-Montserrat text-white text-[14px] opacity-70">
                    Read more
                  </p>
                </div>
                <img
                  src={googleImage}
                  loading="lazy"
                  alt="google"
                  className="w-[20%] rounded-full"
                />
              </div>

              <div className="flex items-center p-5 gap-2">
                <img
                  src={data.profileImage}
                  loading="lazy"
                  alt="profile"
                  className="w-[45px]"
                />
                <p className="text-white font-Montserrat text-[15px] ">
                  {data.name}
                </p>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}
