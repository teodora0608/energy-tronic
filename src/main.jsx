import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home-page.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);