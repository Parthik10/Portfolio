import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Club-management"
              description="Club Management is a web platform for university clubs to register, list events, and manage student applications. Developed with React, Node.js, Express.js, and MongoDB, it streamlines event organization and engagement within university communities."
              ghLink="https://github.com/Parthik10/club_management"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Reporting portal"
              description="The Reporting Portal is a platform for users to report nearby disasters, social issues, and public concerns while also discussing important social topics. Built with React, Node.js, Express.js, and MongoDB, it empowers communities to raise awareness and find solutions collaboratively."
              ghLink="https://github.com/Parthik10/Reporting-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Travel guide"
              description="Built during a hackathon, Travel Guide is a platform where tourists can easily find and connect with local guides. Developed using React, Node.js, Express.js, and MongoDB, it enhances the travel experience by providing verified guides based on location and user preferences."
              ghLink="https://github.com/Parthik10/travel_guide"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


       
        </Row>
      </Container>


      <Container>
      <h1 className="project-heading">
          My Projects <strong className="purple">as intern </strong>
        </h1>
        <p style={{ color: "white" }}>
          works on some real world projects as intern.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="mystic Design"
              description="Mystic Design is a modern and visually appealing website built using React.js for an interior designer. The project focuses on showcasing design portfolios, offering an interactive and user-friendly experience for potential clients. It features dynamic UI components, smooth navigation, and a responsive layout to highlight the designer’s work effectively. This project was developed during my internship, where I gained hands-on experience in building sleek and functional web applications."
              ghLink="https://github.com/Parthik10/mystic"
              demoLink="https://www.mysticdesign.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Garvish Marketing"
              description="Garvish Marketing is a modern, fully responsive website developed using React.js for an internal company. The company needed a fresh and efficient platform, so I built a sleek and user-friendly interface tailored to their business needs. The project focused on improving usability, performance, and a modernized design to enhance internal operations and client interactions."
              ghLink="https://github.com/Parthik10/garvish-marketing"
              demoLink="https://garvishmarketing.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ajax Clothing"
              description="For Ajax Clothing, I worked on implementing secure authentication in the backend using Express.js and MongoDB. The authentication system includes user registration, login, password hashing, and token-based authentication for secure access. This project enhanced my experience in backend development, security best practices, and integrating authentication mechanisms in a full-stack application."
              ghLink="https://github.com/Parthik10/ajax-cloth"
              // demoLink=
            />
          </Col>

          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
