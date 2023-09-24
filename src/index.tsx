import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/navbar";
// import Hero from "./components/hero";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <Navbar />
    {/* <Hero /> */}
  </>,
);
