import React from "react";
import PropTypes from "prop-types";

export const CartIcon = ({ size = "1rem", color = "white", ...rest }) => {
  return (
    <svg
      className="carticon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{ width: size, height: size, color }}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
};

CartIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export const PlusIcon = ({ size = "1rem", color = "white", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{ width: size, height: size, color }}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

PlusIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export const MinusIcon = ({ size = "1rem", color = "white", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      style={{ width: size, height: size, color }}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

MinusIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};
