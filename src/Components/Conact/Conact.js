import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Conact.scss";

function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    emailjs
      .send(
        "service_uxkb6de", 
        "template_5yc17uj", 
        formData,
        "ozvU2Ku4clJegwRVA" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ email: "", message: "" });
        },
        (error) => {
          console.error("Email send error:", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>
        If you have any questions or would like to request a service, leave a
        message here, and I'll get back to you as quickly as possible!
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;
