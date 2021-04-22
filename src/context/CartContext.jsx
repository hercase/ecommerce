import PropTypes from "prop-types";
import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));

  const [cart, setCart] = useState(
    cartLocalStorage && cartLocalStorage.length > 0
      ? cartLocalStorage
      : defaultValue
  );
  cart.totalPrice =
    cart.length > 0
      ? cart.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.item.price,
          0
        )
      : "";
  cart.totalItems =
    cart.length > 0
      ? cart.reduce(
          (totalItemsCart, cartItem) => totalItemsCart + cartItem.quantity,
          0
        )
      : "";

  const addItem = (newItem, newQuantity) => {
    const { quantity = 0 } = cart.find((e) => e.item.id === newItem.id) || {};
    const newCart = cart.filter((e) => e.item.id !== newItem.id);

    setCart([...newCart, { item: newItem, quantity: quantity + newQuantity }]);
  }; // agregar cierta cantidad de un ítem al carrito

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.item.id !== itemId);
    setCart(newCart);
  }; // Remover un item del cart por usando su id

  const clear = () => {
    setCart([]);
  }; // Remover todos los items

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any,
  defaultValue: PropTypes.array,
};
