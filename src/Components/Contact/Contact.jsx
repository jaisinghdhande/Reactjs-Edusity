import React from "react";
import mailIcon from "../../assets/mail-icon.png";
import messageIcon from "../../assets/msg-icon.png";
import callIocn from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import "./Contact.css";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85c6c357-3b25-4c9f-9be2-410e073d3406");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={messageIcon}></img>
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mailIcon}></img>Contact@GreatStack.dev
          </li>
          <li>
            <img src={callIocn}></img>+1 123-456-7890
          </li>
          <li>
            <img src={locationIcon}></img>77 Massachusetts Ave, Cambridge MA
            02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required></input>
          <label>Phone Number</label>
          <input type="number" name="phone" placeholder="Enter your number" required></input>
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required></input>
          <label>Write your message here</label>
          <textarea
            type="text"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
          <button type="submit"  className="btn dark-btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
