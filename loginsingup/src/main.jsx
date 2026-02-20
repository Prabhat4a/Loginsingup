import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME APP (Landing Page)
import App from "./App";

// LOGIN PAGE
import Login from "./pages/Login";

// FORGOT PASSWORD PAGE
import ForgotPassword from "./pages/ForgotPassword";

// GLOBAL CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<App />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* FORGOT PASSWORD PAGE */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
