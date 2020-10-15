import React, { useState } from "react";
import { TwoByTwo } from "./SVG";
import "./GetInTouch.scss";
import Form from "./Form";
// import FormReply from "./FormReply";

export default function GetInTouch(props) {
  // Rodzic ma otrzymać state z informacją czy "data" zostały pobrane, a dziecko ma je przesłać (callback)
  const [name, setName] = useState("");

  const handleSubmit = ({ name, phone, email, message }) => {
    setName(name);
  };

  return (
    <section className="get-in-touch" ref={props.refer} id="section-6">
      <aside></aside>
      <main>
        <h2 className="header">Get In Touch {"{"}</h2>
        <div className="form-container">
          <div className="contact-data">
            <p>al. Brücknera 25-43, </p>
            <p>Wrocław</p>
            <br />
            <p className="email">contact@estigiti.com</p>
            <p className="phone">+48 575 807 907</p>
          </div>
          <Form onSubmit={handleSubmit} />
        </div>
      </main>

      <footer>
        <TwoByTwo color="#ffa300" />
      </footer>
    </section>
  );
}
