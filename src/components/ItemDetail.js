import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemList } from "./data/itemList";
import Loading from "./Loading";
import image from "./img/itemImg.png";
import "../styles/itemStyles.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useCart } from "../context/Context";

const ItemDetail = () => {
  const { id: itemId } = useParams();
  const [loading, setloading] = useState(true);
  const [item, setItem] = useState({});
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [inCart, setInCart] = useState(isInCart(item.id));

  useEffect(() => {
    setloading(true);
    getItemDetails();
  }, []);

  const getItemDetails = () => {
    const db = getFirestore();

    getDoc(doc(db, "items", itemId))
      .then((doc) => setItem({ id: doc.id, ...doc.data() }))
      .then(
        setTimeout(() => {
          setloading(false);
        }, 1000)
      );
  };

  const addHandler = () => {
    addToCart(item);
    setInCart(isInCart(item.id));
  };

  const removeHandler = () => {
    removeFromCart(item.id);
    setInCart(isInCart(item.id));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="card-detail-container">
          <img src={item.imgUrl} alt="img" className="item-desc-img" />
          <div className="item-desc-text">{item.name}</div>
          <div className="item-desc-text">{item.description}</div>
          <div className="item-desc-text">Price: ${item.price}</div>
          <button onClick={addHandler} className="btn-desc">
            {" "}
            +{" "}
          </button>
          <button
            onClick={removeHandler}
            className={inCart < 0 ? "btn-desc btn-desc-off" : "btn-desc"}
            disabled={inCart < 0}
          >
            -
          </button>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
