import React, { useState, useContext } from "react";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartContext";
import "./styles.scss";

export function ItemDetail({ item }) {
  const [count, setCount] = useState(0);
  const { addItem } = useContext(CartContext);

  const addHandler = (contador) => {
    addItem(item, contador);
    setCount(contador);
  };
  return (
    <div className="containerf">
      <div className="itemf">
        <img
          className="itemf__image"
          alt="imagen del producto"
          src={item?.pictureUrl}
        ></img>
        <span className="itemf__title">{item?.title}</span>
        <span className="itemf__detail">Stock: {item?.description}</span>
        <span className="itemf__price">Precio: ${item?.price}</span>
        <span className="itemf__stock">Stock: {item?.stock}</span>
      </div>

      {count === 0 ? (
        <ItemCount stock={item?.stock} initial={1} onAdd={addHandler} />
      ) : (
        <div>
          <Link to="/cart">
            <button className="counter__buttonadd">Terminar compra</button>
          </Link>
          <div className="container">
            <Link to={`/category/relojes`} className="navbar__link">
              <li>Ver más Relojes</li>
            </Link>
            <Link to={`/category/lentes`} className="navbar__link">
              <li>Ver más Lentes</li>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    pictureUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
  }),
};
