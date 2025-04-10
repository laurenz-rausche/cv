import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Cover from "./Cover";
import CV from "./CV";

import { CVData } from "./Data.example";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Cover CVData={CVData} />
    <CV CVData={CVData} />
  </StrictMode>
);
