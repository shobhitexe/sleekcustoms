import { Fragment } from "react";
import { AboutGrid, AboutHead, AboutParallex, Partners } from "../Components";

export default function About() {
  return (
    <Fragment>
      <AboutHead />
      <AboutParallex />
      <AboutGrid />
      <Partners />
    </Fragment>
  );
}
