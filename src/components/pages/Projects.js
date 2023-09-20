import React, { useState } from "react";
import githublogo from "../../assets/icons/githublogo.png"


function Portfolio() {
  const [projects] = useState([
    {
      name: "Tech Blog",
      link: "https://tech-blog-mod-1d6551d02413.herokuapp.com/",
      gitLink: "https://github.com/efogerson1/tech-blog",
    },
    {
      name: "Travel Planner",
      link: "https://efogerson1.github.io/Travel-Planner/",
      gitLink: "https://github.com/efogerson1/Travel-Planner",
    },
    {
      name: "Kiddo Kare",
      link: "https://hidden-eyrie-72629-9ca91495354a.herokuapp.com/",
      gitLink: "https://github.com/taylorgehrts/KIDDO_KARE",
    },
    {
      name: "Note Taker",
      link: "https://note-taker-mod2-c2f1f2beca13.herokuapp.com/",
      gitLink: "https://github.com/efogerson1/note-taker-mod2",
    },
    {
      name: "Workday Scheduler",
      link: "https://efogerson1.github.io/workday-schedule/",
      gitLink: "https://github.com/efogerson1/workday-schedule",
    },
    {
      name: "Password Generator",
      link: "https://efogerson1.github.io/random-password-generator/",
      gitLink: "https://github.com/acardozoweb/password-generator",
    },
  ]);

  return (
    <div>
      <h1 className="pro-title">Projects</h1>
      <div className="flex-row">
        {projects.map((image, i) => (
          <div className="test mx-2 " key={image.name}>
            <img
              src={require(`../../assets/images/projects/${i}.png`).default}
              alt={image.name}
              className="project img-thumbnail "
              key={image.name}
            />
            <div className="sub">
              <a target="_blank" href={image.link}>
                {" "}
                <span className="name  py-1 px-1">{image.name}</span>
              </a>
              <a target="_blank" href={image.gitLink}>
                <img
                  src={githublogo}
                  alt="link to git hub"
                  className="project-link"
                  key={image.gitLink}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;