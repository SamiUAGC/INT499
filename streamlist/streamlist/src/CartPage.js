import React from "react";
import "./CartPage.css";

// This component displays the cart page, showing the products added to the cart and calculate total price.
function CartPage({ CartItems, removeFromCart, updateQuantity }) {
  const total = CartItems.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  return (
    <div className="cart-container">
      <img src="/CheckoutIcon.png" alt="CheckoutIcon" className="CheckoutIcon" />
      <h2 className="HeaderText">Cart</h2>
      {CartItems.length === 0 ? (
        <p>Nothing is added to the cart yet.</p>
      ) : (
        <div>
          {/* Map through the products in the cart and display them*/}
          {CartItems.map((product, index) => (
            <div key={index} className="cart-product">
            <img src={product.img} alt={product.service} width="60" />
            <h3>{product.service}</h3>
            <p>{product.serviceInfo}</p>
            <p>Price: ${product.price}</p>
                          
            {/* Input field to update the quantity of the product */}
            <label>
              Quantity:
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => updateQuantity(product.id, e.target.value)}
              />
            </label>

            {/* Display subtotal for the product based on price and quantity */}
            <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
          
            {/* Button to remove the product from the cart */}
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;