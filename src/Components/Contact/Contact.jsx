import React from "react";
import mailIcon from "../../assets/mail-icon.png";
import messageIcon from "../../assets/msg-icon.png";
import callIocn from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-left">
        <div className="send-message">
          <p>Send us a message</p>
          <img src={messageIcon}></img>
        </div>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <div className="send-message">
          <img src={mailIcon}></img>
          <p>Contact@GreatStack.dev</p>
        </div>
        <div className="send-message">
          <img src={callIocn}></img>
          <p>+1 123-456-7890</p>
        </div>
        <div className="send-message">
          <img src={locationIcon}></img>
          <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
        </div>
      </div>
      <div className="contact-right"></div>
    </div>
  );
};

export default Contact;
