import { PortfolioDisplayData } from "../../data/constants/Portfolio/portfolioConstants";
import { motion } from "framer-motion";

type PortfolioDisplayProps = {
  filter: string;
};

export default function PortfolioDisplay({ filter }: PortfolioDisplayProps) {
  return (
    <div className="pb-[200px] min-h-[500px] grid grid-cols-3 justify-between">
      {PortfolioDisplayData.filter(
        (data) => filter === "" || data.tag === filter
      )
        .sort(() => Math.random() - 0.5)
        .map((data) => {
          if (data.image === "/portfolio/display/") {
            return;
          }
          return (
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 50,
                damping: 10,
              }}
              src={data.image}
              alt={data.tag}
              key={data.image}
              className=""
            />
          );
        })}
    </div>
  );
}
