import React, { useState } from "react";
import { TwoByTwo } from "./SVG";
import "./GetInTouch.css";
import Form from "./Form";
import FormReply from "./FormReply";

export default function GetInTouch(props) {
  // Rodzic ma otrzymać state z informacją czy "data" zostały pobrane, a dziecko ma je przesłać (callback)
  const [isDone, setIsDone] = useState(true);
  const [data, setData] = useState({});
  const handleChange = (childData, childIsDone) => {
    setIsDone(!childIsDone);
    setData(childData);
    console.log(`childData: ${childData}, childIsDone: ${childIsDone}`);
  };

  return (
    <section className="get-in-touch" ref={props.refer} id="section-6">
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
          {isDone ? <Form onSubmit={handleChange} /> : <FormReply />}
        </div>
      </div>

      <div className="s-foot">
        <TwoByTwo color="#ffa300" class="get-in-touch-foot-svg" />
      </div>
    </section>
  );
}
