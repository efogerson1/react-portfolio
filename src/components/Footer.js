import React from "react";


/* Create images in future */
import githublogo from "../assets/icons/githublogo.png";
import gmaillogo from "../assets/icons/gmaillogo.png";
import linkedinlogo from "../assets/icons/linkedinlogo.png";

function Footer() {
  return (
    <footer id="contact">
      <a href="https://www.linkedin.com/in/eric-fogerson-121a061a5/" rel="noreferrer" target="_blank">
        <img src={linkedinlogo} alt="linked in logo" />
      </a>
      <a href="https://github.com/efogerson1" rel="noreferrer" target="_blank">
        <img src={githublogo} alt="github logo" />
      </a>
      <a href="mailto:efogerson2@gmail.com">
        <img src={gmaillogo} alt="gmail logo" />
      </a>
    </footer>
  );
}

export default Footer;