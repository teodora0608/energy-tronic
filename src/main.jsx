import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/home-page.jsx";
import AboutPage from "./pages/about-page.jsx";
import ServicesPage from "./pages/services-page.jsx";
import ContactPage from "./pages/contact-page.jsx";

function NotFound() {
  return <div className="p-8 text-center">404 – Pagina nu există</div>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
