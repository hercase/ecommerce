import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropTypes from "prop-types";

export const Item = ({ item }) => {
  return (
    <div className="item">
      <img className="item__image" src={item.pictureUrl} alt="imagen" />
      <span className="item__title">{item.title}</span>
      <span className="item__price">${item.price}</span>
      <span className="item__detail">{item.description}</span>

      <Link className="item__link" to={`/item/${item.id}`}>
        Ver Producto
      </Link>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    pictureUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    id: PropTypes.string,
  }),
};
