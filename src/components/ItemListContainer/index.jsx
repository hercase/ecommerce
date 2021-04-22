import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";
import "./styles.scss";
import { getFirestore } from "../../firebase";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const filtrado = itemsCollection

      .where("categoria", "==", categoryId)
      .limit(10);
    const prom = filtrado.get();

    prom.then((snaptshot) => {
      if (snaptshot.size > 0) {
        setItems(
          snaptshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      }
    });
  }, [categoryId]);

  return (
    <div className="containeritems">
      <h2 className="titulo">Nuestros {categoryId}</h2>
      <ItemList items={items} />
    </div>
  );
}
