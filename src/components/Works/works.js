import React from "react";
import "./works.css";
import chat from "../../assets/chat.png";
import expense from "../../assets/expense.png";

const projects = [
  {
    heading: "Expense Tracker",
    Plink: "https://github.com/belal0438/expensesTrackerBackendAndFrontend",
    paragraph:
      "Created an expense tracker where a user can signup and login, add and remove expenses.",
    img: expense,
    techStack: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    AreaOfResp: [
      "I created the login and signup page functionality (Authentication).",
      "Added report generation for premium users.",
      "Created all backend reuired for the project",
      "Gave the final touches to the project",
    ],
  },
  {
    heading: "Group Chat Application",
    Plink: "https://github.com/belal0438/gropuChetWithNodejs/tree/main/BackEnd",
    paragraph:
      "Created a group chat application where users can login and send and receive messages.",
    img: chat,
    techStack: ["HTML", "CSS", "JavaScript", "Express", "MySql"],
    AreaOfResp: [
      "I created the login and signup page functionality (Authentication).",
      "Designed the schema for chats, users, and groups and set up associations between them.",
      "Created all backend reuired for the project",
      "Gave the final touches to the project",
    ],
  },
];

const Works = () => {
  return (
    <section id="works">
      <span className="workstitle"> My Project Works</span>

      {projects.map((project) => {
        return (
          <div key={Math.random()} className="worksBar">
            <div className="project">
              <div className="headingButton">
                <span className="headingProject">{project.heading}</span>
                <a className="viewproject" href={project.Plink}>
                  VIEW PROJECT
                </a>
              </div>
              <span className="paragrph">{project.paragraph}</span>
              <div className="imagTechResponsiblity">
                <img src={project.img} alt="expenses" className="projectLogo" />
                <div className="TechResponsibility">
                  <div className="tech">
                    <span>Tech-stack</span>
                    <ul>
                      {project.techStack.map((tech) => {
                        return <li key={Math.random()}>{tech}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="responsibilty">
                    <span>Area of responsibilities</span>
                    <ul>
                      {project.AreaOfResp.map((resp) => {
                        return <li key={Math.random()}>{resp}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Works;
