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
      name: "myFitness Application 1.0",
      link: "http://54.191.22.251:8080/",
      gitLink: "https://github.com/MerelJac/fitness-application",
    },
  ]);

  return (
    <div>
      <h1 className="pro-title">Projects</h1>
      <div className="flex-row">
        {projects.map((project, i) => (
          <div className="test mx-2 " key={project.name}>
            <img
              src={require(`../../assets/images/projects/${i}.png`)}
              alt={project.name}
              className="project img-thumbnail "
              key={project.name}
            />
            <div className="sub">
              <a target="_blank" href={project.link}>
                {" "}
                <span className="name  py-1 px-1">{project.name}</span>
              </a>
              <a target="_blank" href={project.gitLink}>
                <img
                  src={githublogo}
                  alt="link to git hub"
                  className="project-link"
                  key={project.gitLink}
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