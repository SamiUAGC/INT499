//Sami Yousif
//INT499 - Miguel Kanto
//Last updated: 03/31/2025
//StreamList App

import React, { useState } from "react"; //React and state management.
import { BrowserRouter as Router } from "react-router-dom"; //Needed for routing.
import NavMenu from "./NavMenu"; //Needed for navigation menu.
import RoutePaths from "./RoutePaths"; //Needed for routing paths.
import "./App.css"; //Import the styling file for App.js but its empty for now leaving it as default.

function App() {
  const [CartItems, setCartItems] = useState([]); //Use state to manage the cart products.

  //Initialize the state with an empty array to hold subscription and other products.
  const addToCart = (product) => {
    setCartItems([...CartItems, { ...product, quantity: 1 }]);
  };
  //Function to remove products from the cart based on their ID.
  const removeFromCart = (id) => {
    setCartItems(CartItems.filter((product) => product.id !== id));
  };
  //Function to update the quantity of products in the cart based on their ID.
  const updateQuantity = (id, quantity) => {
    setCartItems((prevproducts) =>
      prevproducts.map((product) =>
        product.id === id ? { ...product, quantity: parseInt(quantity) } : product
      )
    );
  };
  //routing paths are defined in RoutePaths.js and imported here.
  //CartItems is passed as a prop to RoutePaths to manage the cart products.
  return (
    <Router>
      <NavMenu />
      <RoutePaths
        CartItems={CartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </Router>
  );
}

export default App;