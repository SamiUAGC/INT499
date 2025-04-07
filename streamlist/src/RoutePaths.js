import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import CartPage from "./CartPage";
import AboutPage from "./AboutPage";
import SubscriptionPage from "./SubscriptionPage";

// This component defines the routes for the application using React Router.
function RoutePaths({ CartItems, addToCart, removeFromCart, updateQuantity }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/subscriptions"  element={<SubscriptionPage CartItems={CartItems} addToCart={addToCart}/>}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage CartItems={CartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>} />
    </Routes>
  );
}

export default RoutePaths;