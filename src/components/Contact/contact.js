import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import linkdinIcon from "../../assets/linkdinIcon.png";
import GithubIcon from "../../assets/githubIcon.png";
import Instagram from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8m6gwv9",
        "template_hvwuaae",
        form.current,
        "7rjbmo2BaU7cstw7U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1 className="contactPageTittle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="user_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="user_email"
        />
        <input
          type="text"
          className="mobNum"
          placeholder=" Mobile Number"
          name="mobile_number"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>

      <div className="links">
        <a href="https://www.facebook.com/mohammadbelal.mohammadbelal.773?mibextid=JRoKGi">
          <img src={FacebookIcon} alt="Facebook" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/md-belal-68203a23b/">
          <img src={linkdinIcon} alt="Twitter" className="link" />
        </a>
        <a href="https://github.com/belal0438">
          <img src={GithubIcon} alt="Youtube" className="link" />
        </a>
        <a href="https://www.instagram.com/voice_of_belal?igsh=OGQ5ZDc2ODk2ZA==">
          <img src={Instagram} alt="Instagram" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
