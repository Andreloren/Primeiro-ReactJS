import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/Global";
import { ToggleColorMode } from "./styles/themes/ButtonTroca";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <ToggleColorMode />
  </React.StrictMode>
);
