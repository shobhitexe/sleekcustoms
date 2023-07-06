import { PortfolioSortIcons, PortfolioDisplay, PagesHead } from "../Components";
import { Fragment, useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("");

  return (
    <Fragment>
      <PagesHead
        bgImage="portfolio-head"
        heading1="GLASGOW, UNITED KINGDOM"
        heading2="DETAILING PORTFOLIO"
      />
      <PortfolioSortIcons setFilter={setFilter} />
      <PortfolioDisplay filter={filter} />
    </Fragment>
  );
}
