import React from "react";
import "./intro.css";
import btnimg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import belalImag from "../../assets/belal_update.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="intoName">Mohd Belal</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          {" "}
          I am a skilled web developer having an experienced of building <br />{" "}
          Web application with React.Js, Node.Js and some other useful <br />
          libraries and frameworks{" "}
        </p>
        <div className="containbtn">
          <a
            className="btn"
            href="https://drive.google.com/file/d/1a0mYQv49ZpIpIiyC_O7hwlZQ3C2LIfUc/view?usp=sharing">
            Download Resume
          </a>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="btn">
            <img src={btnimg} alt="Hire" className="btnImg" />
            Hire Me
          </Link>
        </div>
      </div>
      <img src={belalImag} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
