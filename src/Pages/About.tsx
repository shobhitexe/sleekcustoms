import { Fragment } from "react";
import { AboutHead, AboutParallex, Partners } from "../Components";

export default function About() {
  return (
    <Fragment>
      <AboutHead />
      <AboutParallex />
      {/* <AboutGrid /> */}
      <Partners />
    </Fragment>
  );
}
