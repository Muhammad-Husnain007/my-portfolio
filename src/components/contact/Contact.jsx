import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ovl351g',   // service ID
      'template_uuirjhb',  // template ID
      form.current,
      'mSoM-nsGWc4O9xm2E'  // public key
    ).then(
      () => {
        alert("Message sent successfully ✅");
        form.current.reset();  // <-- yeh line add ki
      },
      (error) => alert("Failed to send ❌: " + error.text)
    );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Interested in working together or have any questions? Feel free to reach out! 🚀
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:hasnainilyas007@gmail.com">hasnainilyas007@gmail.com</a></p>
        <p><strong>Phone:</strong> 0348-2854160</p>
        <p>
          <a href="https://github.com/Muhammad-Husnain007" target="_blank" rel="noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/muhammad-husnain-617b5a282/" target="_blank" rel="noreferrer"> LinkedIn</a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
