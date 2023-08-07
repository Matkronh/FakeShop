import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const getTotalSum = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalSum, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};