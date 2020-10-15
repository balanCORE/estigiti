import React, { useState } from "react";

import _ from "lodash";

export default function Form(props) {
  const [validation, setValidation] = useState({
    fields: {
      fName: "",
      fPhone: "",
      fEmail: "",
      fMessage: "",
    },
    errors: {
      eName: "",
      ePhone: "",
      eEmail: "",
      eMessage: "",
    },
    isValid: Boolean,
  });
  //

  const errorHandler = (data) => {
    const {
      fields: { fName, fPhone, fEmail, fMessage },
    } = data;
    !fName &&
      setValidation((prevValue) => {
        return {
          ...prevValue,
          isValid: false,
          eName: "*Please enter your name.",
        };
      });

    typeof fName !== "undefined" &&
      (!fName.match(/^[a-zA-Z ]*$/))(
        setValidation((prevValue) => {
          return {
            ...prevValue,
            isValid: false,
            eName: "*Please enter alphabet characters only.",
          };
        })
      );

    !fName &&
      setValidation((prevValue) => {
        return {
          ...prevValue,
          isValid: false,
          eEmail: "*Please enter your email.",
        };
      });

    //regular expression for email validation
    const eMailPattern =
      new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )(typeof fEmail !== "undefined") &&
      (
        !eMailPattern.test(fEmail) &&
        setValidation((prevValue) => {
          return {
            ...prevValue,
            isValid: false,
            eEmail: "*Please enter a valid email.",
          };
        })
      )(!fPhone) &&
      setValidation((prevValue) => {
        return {
          ...prevValue,
          isValid: false,
          ePhone: "*Please enter your phone no.",
        };
      })(typeof fPhone !== "undefined") &&
      (!fPhone.match(/^[0-9]{10}$/))(
        setValidation((prevValue) => {
          return {
            ...prevValue,
            isValid: false,
            ePhone: "*Please enter valid phone no.",
          };
        })
      );
    !fMessage &&
      setValidation((prevValue) => {
        return {
          ...prevValue,
          isValid: false,
          eMessage: "*Please write something to us.",
        };
      });

    return validation;
  };
  //
  const handleInputs = (e) => {
    const { name, value } = e.target;
    errorHandler(validation);
  };
  const passData = (e) => {
    e.preventDefault();
    props.onSubmit(validation);
  };

  return (
    <form onSubmit={passData}>
      <input
        className="i-name"
        type="text"
        value={validation.fields.name}
        placeholder="Name"
        onChange={handleInputs}
        name="name"
      ></input>
      <input
        className="i-phone"
        type="phone"
        value={validation.fields.phone}
        placeholder="Phone"
        onChange={handleInputs}
        name="phone"
      ></input>
      <input
        className="i-email"
        type="email"
        value={validation.fields.email}
        placeholder="E-mail"
        onChange={handleInputs}
        name="email"
      ></input>
      <textarea
        className="textarea"
        placeholder="Your message"
        onChange={handleInputs}
        name="text"
        value={validation.fields.text}
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
