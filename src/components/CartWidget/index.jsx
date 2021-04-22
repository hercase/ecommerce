import React, { useContext } from "react";
import "./styles.scss";
import { CartContext } from "../../context/CartContext";
import { CartIcon } from "../Icons";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <CartIcon size="2.5rem" color="white" />
      {cart.totalItems ? (
        <span className="notification"> {cart.totalItems}</span>
      ) : null}
    </div>
  );
}
