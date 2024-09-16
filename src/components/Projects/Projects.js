import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/1.png";
import project2 from "../../Assets/Projects/2.png";
import project3 from "../../Assets/Projects/3.png";
import project4 from "../../Assets/Projects/4.png";
import project5 from "../../Assets/Projects/5.png";

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
              imgPath={project2}
              isBlog={false}
              title="Online-Shop"
              description="A dynamic e-commerce web application with reusable components for managing cart items, orders, and payment systems. Utilizes Context API for state management.
Key Features: Reusable components, cart management, payment integration, high performance.
Technologies: React.js, Context API, Formik, Yup, Tailwind CSS, React Query, Axios, JWT, React Router DOM. "
              ghLink="https://github.com/reemazakout/Online-Shop.git"
              demoLink="https://online-shop-tan-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Shop Stock"
              description="-An enhanced version of the e-commerce web app using TypeScript for type safety and code scalability. 
           Supports lazy loading and uses Redux Toolkit for state management.
             - Key Features: TypeScript integration, lazy loading, cart management, high performance.
             -Technologies: React.js, TypeScript, Redux Toolkit, Zod, React Query, Axios, JWT, React Router   DOM"
              ghLink="https://github.com/reemazakout/Shop-stock-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Organizer Tasks"
              description="A web application designed to help users organize their daily tasks. It allows users to add, delete, and edit tasks, create new boards, and move tasks through a drag-and-drop interface. The application is built to improve task organization with an intuitive and interactive user experience.
 Key Features: Task management, board creation, drag-and-drop functionality.
 Technologies: React.js, Context API, Drag-and-drop interface."
              ghLink="https://github.com/reemazakout/Organizer-tasks.git"
              demoLink="https://main--organizethetasks.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Around The World App"
              description="Around The World App is a ReactJS project displaying countries worldwide, using React Router DOM, ParamsID, and supporting Dark/Light Mode. It shows each country’s name, population, religion, and capital"
              ghLink="https://github.com/reemazakout/Around-The-World-App.git"
              demoLink="https://around-the-world-app-chi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
