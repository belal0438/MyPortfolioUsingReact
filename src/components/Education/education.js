import React from "react";
import "./education.css";
import sharpnerLogo from "../../assets/sharpner.png";
import collegeLogo from "../../assets/collage.png";
import UniversityLogo from "../../assets/university.png";

const arr = [
  {
    imag: sharpnerLogo,
    hding: "Sharpner Tech",
    finishDate: "27th Feb 2023-Present",
    paragraph: "Full Stack Web Developer",
  },
  {
    imag: UniversityLogo,
    hding: "Bundelkhand University, Jhansi",
    finishDate: "2018-2022",
    paragraph: "Bachelor of Technology, (Mechanical Engineering)",
  },
  {
    imag: collegeLogo,
    hding: "Kishan Inter College, Meerpur, mau",
    finishDate: "2016-2017",
    paragraph: "XII (Physics, Chemistry, Mathematics)",
  },
];

const Education = () => {
  return (
    <section id="education">
      <span className="educationTitle"> My Education</span>
      <div className="container">
        {arr.map((item) => {
          return (
            <div className="educationBar" key={Math.random()}>
              <div className="imageResponsiblity">
                <img src={item.imag} alt="college" className="Logo" />
              </div>
              <div className="project">
                <div className="headingButton">
                  <span className="headingEducation">{item.hding}</span>
                  <span className="finishDate">{item.finishDate}</span>
                </div>
                <span className="paragrph">{item.paragraph}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
