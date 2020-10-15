import React, { useState } from "react";

export const errorHandler = (data) => {
  const {
    fields: { fName, fPhone, fEmail, fMessage },
  } = data;

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
