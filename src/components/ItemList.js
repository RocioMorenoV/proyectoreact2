import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import "../styles/itemStyles.css";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemList = () => {
  const [item, setItem] = useState([]);
  const { id: categoryId } = useParams();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    getItem();
  }, [categoryId]);

  const getItem = () => {
    const db = getFirestore();

    if (categoryId != null) {
      getDocs(
        query(
          collection(db, "items"),
          where("categoryId", "==", Number(categoryId))
        )
      )
        .then((docSnap) => {
          setItem(docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          console.log(
            "Document data:",
            docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .then(
          setTimeout(() => {
            setloading(false);
          }, 1000)
        );
    } else {
      getDocs(collection(db, "items"))
        .then((docSnap) => {
          setItem(docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          console.log(
            "Document data:",
            docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .then(
          setTimeout(() => {
            setloading(false);
          }, 1000)
        );
    }
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
