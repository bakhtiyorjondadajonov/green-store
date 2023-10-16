import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProviderConfig from "./tools/provider";
import Trends from "./components/trends";
import Blogs from "./components/blogs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ProviderConfig>
    <div className="flex flex-col gap-[100px]">
      <Navbar />
      <Hero />
      <Trends />
      <Blogs />
    </div>
  </ProviderConfig>,
);
