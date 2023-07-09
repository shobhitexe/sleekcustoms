import { Fragment } from "react";
import {
  ServicesPageMain,
  DetailingAddons,
  DetailingPackages,
  PagesHead,
} from "../Components";
import { autoDetailingMainImagesData } from "../data/constants/AutoDetailing/autoDetailingConstants";

export default function AutoDetailing() {
  return (
    <Fragment>
      <PagesHead
        bgImage="bg-auto-detailing-bg"
        heading1="DRIVE A NEW CAR EVERYDAY"
        heading2="AUTO DETAILING"
      />
      <ServicesPageMain
        defaultImage="AD-3.webp"
        arrImages={autoDetailingMainImagesData}
        heading="COMPLETE AUTO DETAILING"
        paragraph={`At Sleek Customs, located in the prestigious Atlas Industrial Estate
        on Rutherglen Road, we take immense pride in our unrivaled expertise
        and passion for full car detailing. Our commitment to perfection is
        what sets us apart, ensuring that every vehicle that enters our
        doors receives the royal treatment it deserves. With our meticulous
        attention to detail and cutting-edge techniques, we transform cars
        into stunning works of art, restoring their original luster and
        beauty. From the moment you entrust your vehicle to our skilled
        hands, you can rest assured that it will receive the highest level
        of care, utilizing only the finest products and tools in the
        industry.`}
      />
      <DetailingPackages />
      <DetailingAddons />
    </Fragment>
  );
}
