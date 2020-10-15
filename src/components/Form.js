import React, { useState } from "react";

export default function Form(props) {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });
  const [error, setError] = useState({
    error: Boolean,
    problem: String,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        !value
          ? setError({
              error: true,
              problem: `${name} is too short`,
            })
          : setMessage({ ...message, [name]: value });
        break;
      case "phone":
        !value
          ? setError(`${name} is too short`)
          : _.isNumber(value) && setMessage({ ...message, [name]: value });
        break;
      case "email":
        console.log(`email is ${value}`);
        setMessage({ ...message, [name]: value });

        break;
      case "text":
        value && console.log(` is ${value}`);
        setMessage({ ...message, [name]: value });

        break;
      default:
        console.log("sorry, something went wrong :( ");
        break;
    }
  };
  const passData = (e) => {
    e.preventDefault();
    props.onSubmit(message);
  };

  return (
    <form onSubmit={passData}>
      <input
        className="i-name"
        type="text"
        value={message.name}
        placeholder="Name"
        onChange={handleInputs}
        name="name"
      ></input>
      <input
        className="i-phone"
        type="phone"
        value={message.phone}
        placeholder="Phone"
        onChange={handleInputs}
        name="phone"
      ></input>
      <input
        className="i-email"
        type="email"
        value={message.email}
        placeholder="E-mail"
        onChange={handleInputs}
        name="email"
      ></input>
      <textarea
        className="textarea"
        placeholder="Your message"
        onChange={handleInputs}
        name="text"
        value={message.text}
      ></textarea>
      <div className="policy-container">
        <input className="i-checkbox" type="checkbox"></input>
        <label className="i-label">
          I have read the Privacy Policy and agree to processing of my data.
        </label>
      </div>
      <button className="btn">
        <span>SEND</span>
      </button>
    </form>
  );
}
