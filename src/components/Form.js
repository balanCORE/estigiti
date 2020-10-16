import React from "react";
import { useForm } from "react-hook-form";

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="myForm">
      <input
        type="text"
        placeholder={`${errors.name ? "Pole obligatoryjne" : "Name"}`}
        name="name"
        ref={register({ required: true, minLength: 3 })}
        className={`${errors.name ? "i-name error" : "i-name"}`}
      />

      <input
        className={`${errors.phone ? "i-phone error" : "i-phone"}`}
        type="phone"
        placeholder={`${errors.phone ? "Pole obligatoryjne" : "Phone"}`}
        name="phone"
        ref={register({ required: true, minLength: 9 })}
      />

      <input
        className={`${errors.email ? "i-email error" : "i-email"}`}
        type="text"
        placeholder={`${errors.email ? "Pole obligatoryjne" : "E-mail"}`}
        name="email"
        ref={register({
          required: true,
          pattern: {
            // Validation pattern
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: true, // Error message when validation fails.
          },
        })}
      />

      <input
        className={`${errors.message ? "i-message error" : "i-message"}`}
        placeholder={`${
          errors.message ? "Pole obligatoryjne" : "Your message"
        }`}
        name="message"
        ref={register({ required: true })}
      />
      <div className="policy-container">
        <label className="i-label" forhtml="checkbox">
          <input
            className="i-checkbox"
            type="checkbox"
            name="checkbox"
            ref={register({ required: true })}
          />
          I have read the Privacy Policy and agree to processing of my data.
        </label>
      </div>
      {/* <input type="submit" className="btn" /> */}
      <button type="submit" className="btn">
        <span>SEND</span>
      </button>
    </form>
  );
}
