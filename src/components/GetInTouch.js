import React, { useState } from "react";
import { TwoByTwo } from "./SVG";
import "./GetInTouch.scss";
import Form from "./Form";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import FormReply from "./FormReply";
init("user_lD3AJ3WidrYeyUdhhhGl6");

export default function GetInTouch(props) {
  // Rodzic ma otrzymać state z informacją czy "data" zostały pobrane, a dziecko ma je przesłać (callback)
  const [isSend, setIsSend] = useState(false);

  function sendEmail() {
    emailjs.sendForm("gmailTest", "template_ya20qjp", "#myForm").then(
      (response) => {
        response.status === 200 && setIsSend(!isSend);
      },
      (error) => {
        console.log(
          "Something went wrong, please refresh the page and try to send a message again",
          error
        );
      }
    );
  }

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
          {!isSend ? <Form onSubmit={sendEmail} /> : <FormReply />}
        </div>
      </main>

      <footer>
        <TwoByTwo color="#ffa300" />
      </footer>
    </section>
  );
}
