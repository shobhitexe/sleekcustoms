import { Footer, Navbar } from "./Components";
import { Home } from "./Pages";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
