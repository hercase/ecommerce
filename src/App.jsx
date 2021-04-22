import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/item/:itemId" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />
        <Footer />
        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;
