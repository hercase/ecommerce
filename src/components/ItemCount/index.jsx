import React, { useState } from "react";
import "./styles.scss";
import { PlusIcon, MinusIcon } from "../Icons";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));
  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };

  const agregar = () => {
    onAdd(count);
    toast.success("Producto agregado", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="counter">
      <div className="">
        <button
          disabled={count <= 1}
          className="counter__button"
          type="button"
          onClick={removeHandle}
        >
          <MinusIcon />
        </button>
        <span className="counter__display">{count}</span>
        <button
          disabled={count >= stock}
          className="counter__button"
          type="button"
          onClick={addHandle}
        >
          <PlusIcon />
        </button>
      </div>
      <p>
        <button className="counter__buttonadd" type="button" onClick={agregar}>
          Agregar carrito
        </button>
      </p>
    </div>
  );
}

ItemCount.propTypes = {
  stock: PropTypes.number,
  initial: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
