import {
  BenifitsComponent,
  CeramicAddons,
  CeramicDifference,
  CeramicPricing,
  PagesHead,
  Partners,
  ServicesPageMain,
} from "../Components";
import { Fragment } from "react";
import {
  ceramicCoatingMainImagesData,
  ceramicCoatingBenifitsGrid,
  ceramicCoatingBenifitsPointers,
} from "../data/constants/CeramicCoating/ceramicCoatingConstants";

export default function CeramicCoating() {
  return (
    <Fragment>
      <PagesHead
        bgImage="bg-ceramic-coating-bg"
        heading1="DRIVE A NEW CAR EVERYDAY"
        heading2="CERAMIC COATING"
      />
      <ServicesPageMain
        defaultImage="CeramicCoatingDefault.webp"
        arrImages={ceramicCoatingMainImagesData}
        heading="CERAMIC PRO IS A NANO CERAMIC PAINT COATING"
        paragraph={`At Sleek Customs, we take immense pride in our expertise and specialization in car ceramic coating, certified by renowned brands such as Kamikaze and Onyx. Our commitment to excellence drives us to provide unparalleled protection for your vehicle. With our Onyx Graphene Pro ceramic coating, we offer an extraordinary shield that ensures your car stays flawlessly protected for a lifetime. This innovative coating harnesses the power of graphene, a cutting-edge material known for its exceptional strength and durability. By applying the Onyx Graphene Pro ceramic coating to your car's surface, we create a shield that resists scratches, UV damage, dirt, and contaminants, keeping your vehicle looking pristine for years to come. 
        When you choose Sleek Customs, you choose the pinnacle of automotive perfection, where passion, skill, and innovation converge to create an experience that leaves a lasting impression.
        `}
      />
      <BenifitsComponent
        heading="THE BENIFITS OF CERAMIC COATING"
        desc="This long-lasting coating repels contaminants and protects your paint
          from the St. Paul-Minneapolis area elements. Upgrade your car's
          appearance with our ceramic coating today!"
        pointersArr={ceramicCoatingBenifitsPointers}
        gridArr={ceramicCoatingBenifitsGrid}
      />
      <CeramicDifference />
      <Partners />
      <CeramicPricing />
      <CeramicAddons />
    </Fragment>
  );
}
