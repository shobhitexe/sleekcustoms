import { Fragment } from "react";
import {
  BenifitsComponent,
  PagesHead,
  ProtectionPackage,
  ServicesPageMain,
} from "../Components";
import {
  PaintProtectionBenifitsPointers,
  PaintProtectionMainImagesData,
} from "../data/constants/PaintProtection/paintprotectionConstants";
import { ceramicCoatingBenifitsGrid } from "../data/constants/CeramicCoating/ceramicCoatingConstants";

export default function PaintProtection() {
  return (
    <Fragment>
      <PagesHead
        bgImage="bg-paint-protection-bg"
        heading1="DRIVE A NEW CAR EVERYDAY"
        heading2="PAINT PROTECTION FILM"
      />
      <ServicesPageMain
        defaultImage="AD-3.webp"
        arrImages={PaintProtectionMainImagesData}
        heading="AN INVISIBLE LAYER OF CAR PROTECTION THAT SAVES YOU MONEY"
        paragraph={`PAINT PROTECTION FILM, offers the protection your vehicle needs from the harsh and damaging Glasgow area elements. Whether it's road salt in the winter or insects and tree sap in the summer, our PAINT PROTECTION FILM provides superior protection. PAINT PROTECTION FILM is the king of defense against rock chips, oxidation, scratches, bird droppings, and sand. The film goes on clear and never compromises style. That means you can drive all over the city in style while simultaneously protecting your vehicle. Come check out the stain resistant and self-healing properties of our PAINT PROTECTION FILM today!`}
      />
      <BenifitsComponent
        heading="THE BENIFITS OF PAINT PROTECTION FILM"
        pointersArr={PaintProtectionBenifitsPointers}
        gridArr={ceramicCoatingBenifitsGrid}
      />
      <ProtectionPackage />
    </Fragment>
  );
}
