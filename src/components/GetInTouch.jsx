import React, { useState } from "react";
import { TwoByTwo } from "./SVG";
import "./GetInTouch.css";

export default function GetInTouch(props) {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });
  const [data, setData] = useState();
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = (e) => {
    setData((prevValue) => ({ ...prevValue, message }));

    e.preventDefault();
  };

  return (
    <section className="get-in-touch">
      <div className="s-top"></div>
      <div className="s-main">
        <div className="get-in-touch-header header-container">
          <h2 className="header">Get In Touch {"{"}</h2>
        </div>
        <div className="jumbo">
          <div className="contact-container">
            <p>al. Brücknera 25-43, </p>
            <p>Wrocław</p>
            <br />

            <p className="email">contact@estigiti.com</p>
            <p className="phone">+48 575 807 907</p>
          </div>

          <form className="form-container">
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
            >
              {message.text}
            </textarea>
            <div className="policy-accept">
              <input type="checkbox"></input>
              <label>
                I have read the Privacy Policy and agree to processing of my
                data.
              </label>
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              <span>SEND</span>
            </button>
          </form>
        </div>
      </div>

      <div className="s-foot">
        <TwoByTwo color="#ffa300" class="get-in-touch-foot-svg" />
      </div>
    </section>
  );
}
