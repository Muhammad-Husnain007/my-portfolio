import React from 'react';
import './style.contact.css';

function Contact() {
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
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
