import React from "react";
import "./skill.css";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import JavaScript from "../../assets/javscript.png";
import nodejs from "../../assets/nodejs.png";
import mongoDB from "../../assets/mongoDb.png";
import mysql from "../../assets/mysql.png";
import expressJs from "../../assets/express.png";
import boostrape from "../../assets/Boostrape.png";
import reactJs from "../../assets/react.png";

const ArrayOfSkills = [
  { Imag: Html, Alt: "HTML", paragraph: "HTML" },
  { Imag: Css, Alt: "CSS", paragraph: "CSS" },
  { Imag: JavaScript, Alt: "javscript", paragraph: "JavaScript" },
  { Imag: nodejs, Alt: "nodejs", paragraph: "Node.Js" },
  { Imag: mongoDB, Alt: "mongodb", paragraph: "MongoDb" },
  { Imag: mysql, Alt: "mysql", paragraph: "MySql" },
  { Imag: expressJs, Alt: "express.js", paragraph: "Express.Js" },
  { Imag: boostrape, Alt: "boostrape", paragraph: "Boostrape" },
  { Imag: reactJs, Alt: "react", paragraph: "React.Js" },
];

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Passionate Web Developer who want to explore and learn every tech stack.
        I'm currently working on HTML, CSS, JavaScript and ReactJs for front-end
        development and NodeJs, ExpressJs for back-end development, MongoDb and
        Mysql as Database Management System.
      </span>
      <ul className="skillBars">
        {ArrayOfSkills.map((skill) => {
          return (
            <li key={Math.random()}>
              <img src={skill.Imag} alt={skill.Alt} />
              <p>{skill.paragraph}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skill;
