import { Fragment, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import {
  Hero,
  Services,
  Partners,
  ReviewHome,
  Portfolio,
  About,
} from "../Components";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#services") {
      scroller.scrollTo(hash.substring(1), {
        smooth: true,
        duration: 500,
        offset: -50,
        spy: true,
      });
    }
  }, []);
  return (
    <Fragment>
      <Hero />
      <Element name="services" id="services">
        <Services />
      </Element>

      <Partners />
      <ReviewHome />
      <Portfolio />
      <About />
    </Fragment>
  );
}
