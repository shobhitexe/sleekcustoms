import { Fragment } from "react";
import { Hero, Services, Partners, Reviews } from "../Components";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Partners />
      <Reviews />
    </Fragment>
  );
}
