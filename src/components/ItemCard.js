import React from "react";
import { Link } from "react-router-dom";
import image from "./img/itemImg.png";
import "../styles/itemStyles.css";

const ItemCard = ({ id, name, price }) => {
  return (
    <Link to={`/item/detail/${id}`}>
      <div className="card-container">
        <img src={image} alt="img" className="item-img" />
        <div className="item-text">{name}</div>
        <div className="item-text">Price: ${price}</div>
      </div>
    </Link>
  );
};

export default ItemCard;
