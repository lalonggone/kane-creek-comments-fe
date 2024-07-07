// src/components/Contact/Contact.js
import React from 'react'
import Footer from '../Footer/Footer'
import './Contact.scss'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-header">drop us a line</h1>
        <form
          className="contact-form"
          action="https://formspree.io/f/mkgwnegl"
          method="POST"
        >
          <label className="contact-label">
            name
            <input className="contact-input" type="text" name="name" required />
          </label>
          <label className="contact-label">
            email
            <input
              className="contact-input"
              type="email"
              name="_replyto"
              required
            />
          </label>
          <label className="contact-label">
            message
            <textarea
              className="contact-textarea"
              name="message"
              required
            ></textarea>
          </label>
          <button className="contact-button" type="submit">
            send it
          </button>
          <Footer />
        </form>
      </div>
    </>
  )
}

export default Contact
