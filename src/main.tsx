import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RefundPolicy from "./pages/refund-policy.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import TermsOfService from "./pages/terms-of-service.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
