import React from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="#" className="footer_logo">
          Designed and Developed by Naman Maurya
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
        </ul>
        <div className="social-icon ">
          <a
            href="https://www.linkedin.com/in/soalnaman/"
            target="_blank"
          >
            <img src={navIcon1} alt="" />
          </a>
          <a href="https://github.com/soaler29naman" target="_blank">
            <img src={navIcon2} alt="" />
          </a>
          <a href="https://www.instagram.com/soaler_silver/" target="_blank">
            <img src={navIcon3} alt="" />
          </a>
        </div>

        <div className="footer_copyright">
          <small>&copy;2023Copy rights. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
