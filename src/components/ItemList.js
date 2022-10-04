import React, { useEffect, useState } from "react";
import { itemList } from "./data/itemList";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import "../styles/itemStyles.css";

const ItemList = () => {
  const [item, setItem] = useState([]);
  const { id: categoryId } = useParams();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    getItem().then((response) => {
      console.log(response);
      setItem(response);
      setloading(false);
    });
  }, [categoryId]);

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(itemList.filter((i) => i.categoryId == categoryId));
        } else {
          resolve(itemList);
        }
      }, 1000);
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid-container">
          {item.map((i) => (
            <ItemCard key={i.id} {...i} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemList;
