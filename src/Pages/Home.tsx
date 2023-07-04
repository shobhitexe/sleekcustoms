import { Fragment } from "react";
import {
  Hero,
  Services,
  Partners,
  Reviews,
  Portfolio,
  About,
  Contact,
} from "../Components";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Partners />
      <Reviews />
      <Portfolio />
      <About />
      <Contact />
    </Fragment>
  );
}
