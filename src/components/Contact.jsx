import React from "react";
import "./css/contact.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import sendData from "./processSubmission.js";
function Contact() {
  return (
    <div className="contactForm">
      <Link to="/" className="croosIcon"></Link>
      <h1 className="hl">Hire me</h1>

      <div className="form">
        <form onSubmit={sendData}>
          <div>
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input required id="name" type="text" name="name" />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input required type="email" id="email" name="email" />
          </div>
          <div>
            <label className="label" htmlFor="phone">
              Phone:
            </label>
            <input required type="tel" name="phone" id="phone" />
          </div>
          <div>
            <label className="label" htmlFor="textarea">
              Message:
            </label>
            <textarea id="textarea" type="text" rows="4" name="message"></textarea>
          </div>
          <div>
            <Button type="submit" variant="success">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="card phoneCard"></div>
    </div>
  );
}

export default Contact;
