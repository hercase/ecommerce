import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.scss";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase";
import "firebase/firestore";
//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const CartView = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [idOrden, setIdOrden] = useState(null);
  //contexto
  const { cart, removeItem, clear } = useContext(CartContext);

  const guardarOrden = () => {
    // e.preventDefault();

    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    const date = firebase.firestore.Timestamp.fromDate(new Date());
    const items = cart.map((cartItem) => {
      return {
        id: cartItem.item.id,
        title: cartItem.item.title,
        price: cartItem.item.price,
      };
    });

    ordersCollection
      .add({ buyer: user, items, date, total: cart.totalPrice })
      .then((doc) => {
        setIdOrden(doc.id);
      });

    const itemsCollection = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((e) => e.item.id)
    );

    itemsCollection.get().then((resultado) => {
      if (resultado.exists) {
        const batch = db.batch();
        const ordenData = resultado.data();
        for (const documento of ordenData) {
          const stockActual = documento.data().stock;

          const itemDelCart = cart.find(
            (cartItem) => cartItem.item.id === documento.id
          );

          const cantidadComprado = itemDelCart.quantity;

          const nuevoStock = stockActual - cantidadComprado;

          batch.update(documento.ref, { stock: nuevoStock });
        }

        batch.commit();
      }
    });
    toast.success("Tu compra fue exitosa!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const noItemComp = (
    <div className="contcart">
      <div className="conttext">
        <h2 className="titulo">
          No hay Items en el carrito
          <p></p>
          <Link className="gotohome" to="/">
            Ir al home
          </Link>
        </h2>
      </div>
    </div>
  );
  console.log({ user });
  const handleUser = (e) => {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  };

  return cart.length <= 0 ? (
    noItemComp
  ) : (
    <div className="cart__view">
      <div>
        {cart?.map((cartItem) => {
          return (
            <div key={cartItem?.item.id} className="cart__container">
              <table className="tabla">
                <thead>
                  <tr>
                    <th className="tabla__title">Imagen</th>
                    <th className="tabla__title">Nombre</th>
                    <th className="tabla__title">Precio</th>
                    <th className="tabla__title">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="tabla__img"
                        alt="producto"
                        src={cartItem?.item?.pictureUrl}
                      />
                    </td>
                    <td className="tabla__info">{cartItem?.item?.title}</td>
                    <td className="tabla__info">${cartItem?.item?.price}</td>
                    <td className="tabla__info">{cartItem?.quantity}</td>
                    <td>
                      <button
                        className="borrar"
                        onClick={() => removeItem(cartItem.item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      <div>
        <h2>
          {idOrden
            ? "Orden generada:" +
              <span className="orden__exitosa">{idOrden}</span>
            : null}
        </h2>
        <h2>Formulario</h2>
        <form action="" onSubmit={guardarOrden}>
          <label>Nombre:</label>
          <input
            placeholder="Nombre"
            type="text"
            value={user.name}
            required
            name="name"
            onChange={handleUser}
          />
          <label>Telefono:</label>
          <input
            placeholder="(0223)6078311"
            type="text"
            value={user.phone}
            required
            name="phone"
            onChange={handleUser}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Mail@mail.com"
            value={user.email}
            required
            name="email"
            onChange={handleUser}
          />
        </form>

        <div className="buttons">
          <p>
            <button type="submit" className="confirmar">
              Generar orden
            </button>
          </p>
          <p>
            <button className="borrartodo" onClick={clear}>
              Borrar todo
            </button>
          </p>
        </div>
        <span className="total">Total: ${cart?.totalPrice}</span>
      </div>
    </div>
  );
};

export default CartView;
