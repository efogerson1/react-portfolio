import React from 'react';
import { Row, Container } from 'react-bootstrap';

import Project from '../Project';


const projects = [
    {
        name: "Tech Blog",
        description: "Tech Blog is an example of a basic blogging application that utilizes Handlebars and Model-View-Controller (MVC) framework.",
        imageLink: /* create images for reference */,
        githubLink: "https://github.com/efogerson1/tech-blog",
        deployedLink: "https://tech-blog-mod-1d6551d02413.herokuapp.com/"
    },
    {
        name: "Travel Planner",
        description: "This application was made with collaboration from another programmer, using AGILE methodology. This application was created to help travelers consider conditions for a great travel destination. Users can enter a desired city destination, and compare the U.S Dollar to any currency in the world (with slight limiations, due to data availability). ",
        imageLink: /* create images for reference */,
        githubLink: "https://github.com/efogerson1/Travel-Planner",
        deployedLink: "https://efogerson1.github.io/Travel-Planner/"
    },
    {
        name: "Kiddo Kare",
        description: "The Kiddo Kare Babysitting Application is a comprehensive platform designed to facilitate seamless communication between parents and babysitters. The application offers a user-friendly interface where users can register as parents or sitters. Parents have the ability to post job opportunities, while sitters can browse available jobs and submit applications. Once approved, the real-time messaging feature within each job posting enables instant communication between parents and sitters.",
        imageLink: /* create images for reference */,
        githubLink: "https://github.com/taylorgehrts/KIDDO_KARE",
        deployedLink: "https://hidden-eyrie-72629-9ca91495354a.herokuapp.com/"
    },
    {
        name: "Note Taker",
        description: "This application has been deployed using Heroku. Application is used to write and save notes, with persisting data using Express.JS framework.",
        imageLink: /* create images for reference */,
        githubLink: "https://github.com/efogerson1/note-taker-mod2",
        deployedLink: "https://github.com/efogerson1/note-taker-mod2"
    },
   
]

function Portfolio() {
    return (
        <Container>
            <h1 className='text-center'>Projects</h1>
            <Row className='justify-content-center'>
                {projects.map((project) => <Project key={project.name} project={project}/>)}
            </Row>
        </Container>
    )
}

export default Portfolio;