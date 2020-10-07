import React from "react";

export default function FormReply() {
  return (
    <div className="form-reply">
      <h4 className="form-thanks-header">Thanks so much for reaching out!</h4>
      <p className="form-thanks-text">
        We received your email and will get back to you with a response as soon
        as possible. During business hours, that’s usually within a couple of
        hours. Evenings and weekends may take us a little bit longer.
        <span>We look forward to chatting soon!</span>
      </p>
      <p className="form-thanks-regards">
        <span>Cheers,</span>
        <span>Estigiti Team</span>
      </p>
    </div>
  );
}
