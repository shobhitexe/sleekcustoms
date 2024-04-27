import {
  Footer,
  Navbar,
  Contact,
  ReviewComponent,
  PortfolioComponent,
  TermsAndConditions,
} from "./Components";
import {
  Home,
  AutoDetailing,
  Reviews,
  Portfolio,
  Services,
  PaintCorrection,
  CeramicCoating,
  PaintProtection,
  About,
} from "./Pages";
import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <Route path="/paint-correction" element={<PaintCorrection />} />
        <Route path="/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/paint-protection" element={<PaintProtection />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
