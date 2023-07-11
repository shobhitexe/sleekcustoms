import { aboutGridImagesData } from "../../data/constants/About/aboutConstants";

export default function AboutGrid() {
  return (
    <div className="flex mx-auto mt-10 w-full flex-wrap justify-center gap-5">
      {aboutGridImagesData.map((data, idx) => {
        return <img src={data} alt={`${idx}`} loading="lazy" />;
      })}
    </div>
  );
}
