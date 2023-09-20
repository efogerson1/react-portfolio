import React from "react";
import tonyprofilepic from "../../assets/images/ericprofilepic.jpeg"

const About = () => (
  <div>
    <h1 class="pro-title">About Me</h1>
    <img className="eric" src={tonyprofilepic} alt="photo of Eric hiking" />
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