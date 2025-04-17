import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./config/i18n.js";
import Navbar from "./shared/navbar.jsx";

const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<AppWrapper />);
