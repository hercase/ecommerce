import PropTypes from "prop-types";
import React from "react";
import { Item } from "../Item";
import "./styles.scss";

export const ItemList = ({ items = [] }) => {
  return (
    <div className="itemlist">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};
