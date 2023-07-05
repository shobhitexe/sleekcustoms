import {
  PortfolioHead,
  PortfolioSortIcons,
  PortfolioDisplay,
} from "../Components";
import { Fragment, useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("");

  return (
    <Fragment>
      <PortfolioHead />
      <PortfolioSortIcons setFilter={setFilter} />
      <PortfolioDisplay filter={filter} />
    </Fragment>
  );
}
