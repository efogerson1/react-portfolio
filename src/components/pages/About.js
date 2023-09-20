import React from "react";
import ericprofilepic from "../../assets/images/ericprofilepic.jpeg"

const About = () => (
  <div>
    <h1 class="pro-title">About Me</h1>
    <img className="eric" src={ericprofilepic} alt="photo of Eric hiking" />
    <p className="para">
  Insert stuff here
    </p>
    <br />
    <br />
    <p className="para">
    More stuff here
    </p>

  </div>
);

export default About;