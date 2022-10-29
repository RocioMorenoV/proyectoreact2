import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  isInCart: () => {},
  count: 0,
  total: 0,
});

const useCart = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const updatedCart = products;
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setProducts(updatedCart);
    setCounter(counter + 1);
    setTotal(total + product.price);

    console.log("Agregado...", updatedCart);
  };

  const removeFromCart = (productId) => {
    console.log("remove product: " + productId);
    const updatedCart = products;
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    setTotal(total - updatedItem.price);
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setProducts(updatedCart);
    setCounter(counter - 1);
    console.log("Removido...", updatedCart);
  };

  const clearCart = () => {
    setProducts([]);
    setCounter(0);
    setTotal(0);
  };

  const isInCart = (productId) => {
    return products.findIndex((item) => item.id === productId);
  };

  const context = {
    products: products,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    isInCart: isInCart,
    count: counter,
    total: total,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export { CartContextProvider, useCart };
