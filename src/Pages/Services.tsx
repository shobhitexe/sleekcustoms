import { Fragment } from "react";
import { PagesHead, ServicesGrid } from "../Components";

export default function Services() {
  return (
    <Fragment>
      <PagesHead
        bgImage="portfolio-head"
        heading1="DRIVE A NEW CAR EVERYDAY"
        heading2="MORE SERVICES"
      />
      <ServicesGrid />
    </Fragment>
  );
}
