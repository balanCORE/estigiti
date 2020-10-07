import React, { useState } from "react";

export default function Form(props) {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });
  const [data, setData] = useState();
  const [isDone, setIsDone] = useState(false);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = (e) => {
    setData((prevValue) => ({ ...prevValue, message }));
    // if input ok than setIsDone(true)
    setIsDone(!isDone);
    e.preventDefault();
  };

  return (
    <form onSubmit={props.onSubmit(isDone)} className="form-container">
      <input
        type="text"
        value={message.name}
        placeholder="Name"
        onChange={handleInputs}
        name="name"
      ></input>
      <input
        type="phone"
        value={message.phone}
        placeholder="Phone"
        onChange={handleInputs}
        name="phone"
      ></input>
      <input
        type="email"
        value={message.email}
        placeholder="E-mail"
        onChange={handleInputs}
        name="email"
      ></input>
      <textarea
        className="form-text"
        placeholder="Your message"
        onChange={handleInputs}
        name="text"
        value={message.text}
      ></textarea>
      <div className="policy-accept">
        <input type="checkbox"></input>
        <label>
          I have read the Privacy Policy and agree to processing of my data.
        </label>
      </div>
      <button className="btn" onClick={handleSubmit}>
        <span>SEND</span>
      </button>
    </form>
  );
}
