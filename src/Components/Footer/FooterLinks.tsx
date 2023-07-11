import { Link } from "react-router-dom";
import { linkType } from "../../data/constants/Home/homeTypes";

type FooterLinksProps = {
  linkData: linkType[];
  heading: string;
};

export default function FooterLinks({ linkData, heading }: FooterLinksProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-white font-Montserrat font-semibold ss:text-[15px] text-[14px]">
        {heading}
      </h1>
      {linkData.map((data) => {
        return (
          <Link
            key={data.title}
            to={data.link}
            className="text-white text-left ss:text-[12px] text-[11px] capitalize opacity-70 font-Montserrat cursor-pointer"
          >
            {data.title}
          </Link>
        );
      })}
    </div>
  );
}
