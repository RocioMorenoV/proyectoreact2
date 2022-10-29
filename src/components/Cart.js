import React from "react";
import { useCart } from "../context/Context";
import Form from "./Form";
import "../styles/cart.css";

const Cart = () => {
  const { products, clearCart, total, count } = useCart();

  return (
    <div className="cart-container">
      {count > 0 ? (
        <>
          <div>
            <div className="grid-header ">
              <span>Name</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Subtotal</span>
            </div>
            {products.map((p, i) => (
              <div key={i} className="cart-grid-container">
                <span>{p.name}</span>
                <span>{p.quantity}</span>
                <span>${p.price}</span>
                <span>${p.quantity * p.price}</span>
              </div>
            ))}
          </div>
          <h3 className="total-text">Total: ${total}</h3>
          <button onClick={clearCart} className="clear-btn">
            Clear Cart
          </button>
          <Form />
        </>
      ) : (
        <h3 className="empty-cart">🤷‍♂️🛒 Su carrito se encuentra vacio 🛒🤷‍♂️</h3>
      )}
    </div>
  );
};

export default Cart;
