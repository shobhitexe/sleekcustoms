import { Fragment } from "react";
import {
  AutoDetailingMain,
  DetailingAddons,
  DetailingPackages,
  PagesHead,
} from "../Components";

export default function AutoDetailing() {
  return (
    <Fragment>
      <PagesHead
        bgImage="auto-detailing-bg"
        heading1="DRIVE A NEW CAR EVERYDAY"
        heading2="AUTO DETAILING"
      />
      <AutoDetailingMain />
      <DetailingPackages />
      <DetailingAddons />
    </Fragment>
  );
}
