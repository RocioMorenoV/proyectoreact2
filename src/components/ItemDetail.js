import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemList } from "./data/itemList";
import Loading from "./Loading";
import image from "./img/itemImg.png";
import "../styles/itemStyles.css";

const Item = ({ item }) => {
  return (
    <div className="card-container">
      <img src={image} alt="img" className="item-img" />
      <div className="item-text">{item.name}</div>
      <div className="item-text">Price: ${item.price}</div>
    </div>
  );
};

const ItemDetail = () => {
  const { id: itemId } = useParams();
  const [loading, setloading] = useState(true);
  const [item, setItem] = useState({});

  useEffect(() => {
    getItemDetails().then((response) => {
      setItem(response);
      setloading(false);
    });
  }, []);

  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemList.find((p) => p.id === Number(itemId)));
      }, 1000);
    });
  };

  return <>{loading ? <Loading /> : <Item item={item} />}</>;
};

export default ItemDetail;
