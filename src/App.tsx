import {
  Footer,
  Navbar,
  Contact,
  ReviewComponent,
  PortfolioComponent,
} from "./Components";
import { Home, AutoDetailing, Reviews, Portfolio, Services } from "./Pages";
import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-detail" element={<AutoDetailing />} />
        <Route path="/customer-reviews" element={<Reviews />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/more-services" element={<Services />} />
      </Routes>

      {currentPath !== "/" &&
      currentPath !== "/portfolio" &&
      currentPath !== "/customer-reviews" ? (
        <PortfolioComponent />
      ) : null}

      {currentPath !== "/" && currentPath !== "/customer-reviews" ? (
        <ReviewComponent />
      ) : null}

      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
