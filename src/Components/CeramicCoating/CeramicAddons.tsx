import { PricingComponent } from "..";
import { CeramicCoatingAddonsdata } from "../../data/constants/CeramicCoating/ceramicCoatingConstants";

export default function CeramicAddons() {
  return (
    <div className="mt-20">
      <div className="flex flex-col text-white w-[80%] mx-auto">
        <p className="font-Montserrat text-[15px]">ADD ONS</p>
        <h1 className="font-deluxe  text-[40px]">ADDITIONAL PACKAGES</h1>
      </div>
      <PricingComponent detailsArr={CeramicCoatingAddonsdata} />
    </div>
  );
}
