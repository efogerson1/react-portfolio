import React from "react";

const Resume = () => (
  <div>
    <h1 class="pro-title">Resume</h1>
    <p>
      Click to download
      <a href="/resume/resume.pdf" download>
        <span className="resumeLink">: Eric Fogerson - FullStack</span>
      </a>
    </p>
    <h3>Proficiencies:</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Progressive Web Apps</li>
    </ul>
  </div>
);

export default Resume;