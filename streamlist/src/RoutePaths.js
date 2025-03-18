import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import CartPage from "./CartPage";
import AboutPage from "./AboutPage";

function RoutePaths() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default RoutePaths;