import { Fragment } from "react";
import {
  Hero,
  Services,
  Partners,
  ReviewHome,
  Portfolio,
  About,
} from "../Components";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Partners />
      <ReviewHome />
      <Portfolio />
      <About />
    </Fragment>
  );
}
