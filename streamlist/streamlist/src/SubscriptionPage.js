import React from "react";
import list from "./data";
import "./SubscriptionPage.css";

// This component displays a list of subscription services and accessories.
function SubscriptionPage({ addToCart, CartItems }) {
// Function to handle adding products to cart. Subscriptions have a limit of 1 while others more than 1.
  const handleAdd = (product) => {
    const isSubscription = product.service.toLowerCase().includes("subscription");
    const alreadyInCart = CartItems.some(
      (cartproduct) => cartproduct.id === product.id
    );
// Check if the product is a subscription and if it's already in the cart
    if (isSubscription && alreadyInCart) {
      alert("Subscription already added to cart!");
    } else if (isSubscription) {
      const subscriptionExists = CartItems.some((cartproduct) =>
        cartproduct.service.toLowerCase().includes("subscription")
      );
      if (subscriptionExists) {
        alert("Only one subscription allowed in cart at a time!");
      } else {
        addToCart(product);
      }
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="subscription-container">
      <h2>Subscriptions & Accessories</h2>
      {/* Map through the list of products and display them}*/}
      {list.map((product) => (
        <div key={product.id}>
          {/* Display the product's image, name, info, price, and a button to add to cart*/}
          <img src={product.img} alt={product.service} width="60" />
          <h3>{product.service}</h3>
          <p>{product.serviceInfo}</p>
          <p>${product.price}</p>
          <button onClick={() => handleAdd(product)} className="addToCart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionPage;