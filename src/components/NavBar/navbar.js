import React, { useState } from "react";
import "./navbar.css";
import belal_name_logo from "../../assets/Belal_name_logo3.jpg";

import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const menuDetail = [
  { PageId: "skills", navopt: "About" },
  { PageId: "works", navopt: "Project" },
  { PageId: "education", navopt: "Education" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuListItem">
        <img src={belal_name_logo} alt="Logo" className="logo" />
      </Link>

      <div className="desktopMenu">
        {menuDetail.map((ele) => {
          return (
            <Link
              key={Math.random()}
              activeClass="active"
              to={ele.PageId}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="desktopMenuListItem">
              {ele.navopt}
            </Link>
          );
        })}
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}>
        <img src={contactImg} alt="Error" className="desktopMenuImg" />
        Contact Me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {[...menuDetail, { PageId: "contact", navopt: "Contact" }].map(
          (Ele) => {
            return (
              <Link
                key={Math.random()}
                activeClass="active"
                to={Ele.PageId}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="listItem"
                onClick={() => setShowMenu(false)}>
                {Ele.navopt}
              </Link>
            );
          }
        )}
      </div>
    </nav>
  );
};

export default Navbar;
