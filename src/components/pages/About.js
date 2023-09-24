import React from "react";
import ericprofilepic from "../../assets/images/ericprofilepic.jpeg"

const About = () => (
  <div>
    <h1 class="pro-title">About Me</h1>
    <img className="eric" src={ericprofilepic} alt="photo of Eric hiking" />
    <p className="para">
    Welcome to my online portfolio! I'm a full-stack developer based in the beautiful Pacific Northwest, specifically the Portland area. My portfolio is a reflection of my passion for coding and my dedication to creating exceptional web experiences. I have experience with a diverse range of programming languages and frameworks, including HTML, CSS, responsive design, Bootstrap, React, JavaScript, Node.js, Express.js, MySQL, MongoDB, and Progressive Web Apps. Each project in my portfolio showcases my skills and creativity, highlighting my ability to bring ideas to life through clean and efficient code. Explore my work, and feel free to reach out if you'd like to collaborate or discuss potential opportunities.
    </p>
    <br />
    <br />
   

  </div>
);

export default About;