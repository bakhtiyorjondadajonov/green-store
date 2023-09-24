import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProviderConfig from "./tools/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ProviderConfig>
    <Navbar />
    <Hero />
  </ProviderConfig>,
);
