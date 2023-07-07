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
        defaultImage="AD-3.png"
        arrImages={PaintProtectionMainImagesData}
        heading="AN INVISIBLE LAYER OF CAR PROTECTION THAT SAVES YOU MONEY"
        paragraph={`Clear Bra, also known as paint protection film, offers the protection your vehicle needs from the harsh and damaging Glasgow area elements. Whether it's road salt in the winter or insects and tree sap in the summer, our clear bra provides superior protection. Clear Bra is the king of defense against rock chips, oxidation, scratches, bird droppings, and sand. The film goes on clear and never compromises style. That means you can drive all over the city in style while simultaneously protecting your vehicle. Come check out the stain resistant and self-healing properties of our clear bra today!`}
      />
      <BenifitsComponent
        heading="THE BENIFITS OF CLEAR BRA"
        pointersArr={PaintProtectionBenifitsPointers}
        gridArr={ceramicCoatingBenifitsGrid}
      />
      <ProtectionPackage />
    </Fragment>
  );
}
