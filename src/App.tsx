import { Footer, Navbar } from "./Components";
import { Home, AutoDetailing, Reviews, Portfolio } from "./Pages";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-detail" element={<AutoDetailing />} />
        <Route path="/customer-reviews" element={<Reviews />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
