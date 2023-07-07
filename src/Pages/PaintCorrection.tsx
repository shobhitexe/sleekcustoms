import { PagesHead, ServicesPageMain, PricingComponent } from "../Components";
import { Fragment } from "react";
import {
  paintCorrectionMainImagesData,
  paintCorrectionPackagedata,
} from "../data/constants/PaintCorrection/paintCorrectionConstants";

export default function PaintCorrection() {
  return (
    <Fragment>
      <PagesHead
        bgImage="bg-paint-correction-bg"
        heading1="DRIVE A NEW CAR EVERYDAY"
        heading2="PAINT CORRECTION"
      />
      <ServicesPageMain
        defaultImage="paintCorrection.png"
        arrImages={paintCorrectionMainImagesData}
        heading="RESTORE TO PERFECTION"
        paragraph="At Sleek Customs, we take immense pride in our unrivaled expertise and dedication to the art of car paint correction. With meticulous attention to detail and a passion for perfection, we have earned a distinguished reputation as the go-to destination for automotive enthusiasts seeking flawless finishes. Our team of skilled craftsmen possesses a deep understanding of the intricacies involved in restoring and enhancing the luster of your beloved vehicles. From minor blemishes to extensive paint imperfections, we apply cutting-edge techniques and industry-leading products to transform your car's appearance, leaving it looking immaculate and radiant."
      />
      <div className=" mt-20">
        <div className="flex flex-col text-white w-[80%] mx-auto">
          <p className="font-Montserrat text-[15px]">PRICING</p>
          <h1 className="font-deluxe  text-[40px]">
            VIEW OUR PAINT CORRECTION PACKAGES
          </h1>
        </div>
      </div>
      <PricingComponent detailsArr={paintCorrectionPackagedata} />
    </Fragment>
  );
}
