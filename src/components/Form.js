import React, { useEffect } from "react";
import { useCart } from "../context/Context";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../styles/cart.css";

const Form = () => {
  const [phone, setPhone] = useState(0);
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [emailAgain, setEmailAgain] = useState("");
  const { clearCart, products, total } = useCart();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      phone != 0 &&
      name != "" &&
      secondName != "" &&
      email != "" &&
      emailAgain != ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone, name, secondName, email, emailAgain]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== emailAgain) {
      alert("Los correos no matchean.");
      return;
    }
    putOrder();
  };

  const putOrder = () => {
    const user = {
      name: name,
      secondName: secondName,
      phone: phone,
      email: email,
    };
    const order = {
      buyer: user,
      items: products,
      total: total,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => alert("Procesado con exito: " + res.id + "  ✔"))
      .then(clearCart());
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-container-inside">
        <label className="input-label">Name:</label>
        <input
          className="input-box"
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-container-inside">
        <label className="input-label">Second name:</label>
        <input
          className="input-box"
          type="text"
          value={secondName}
          name="secondName"
          onChange={(e) => setSecondName(e.target.value)}
          required
        />
      </div>
      <div className="form-container-inside">
        <label className="input-label">Email address:</label>
        <input
          className="input-box"
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-container-inside">
        <label className="input-label">Confirm email address:</label>
        <input
          className="input-box"
          type="email"
          value={emailAgain}
          name="emailAgain"
          onChange={(e) => setEmailAgain(e.target.value)}
          required
        />
      </div>
      <div className="form-container-inside">
        <label className="input-label">Phone Number:</label>
        <input
          className="input-box"
          type="number"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={disabled ? "finish-btn disabled" : "finish-btn"}
        disabled={disabled}
      >
        Finish Payment
      </button>
    </form>
  );
};

export default Form;
