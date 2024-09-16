import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Reema Zakout  </span>
            Skilled Frontend Developer specializing in React.js, Next.js, and TypeScript. Experienced in building high-performance web applications with API integration, state management (Redux, Context API), and a focus on performance and SEO. Proficient in SSR/SSG (Next.js) and asynchronous data fetching (React Query, SWR). Develops responsive UIs using Tailwind CSS and Styled Components, creating user-centric, optimized interfaces across devices.
            <br>
            </br>
            
            
           <hr>
           </hr>
           <div className="purple font-weight-bold"> Apart from coding, some other activities that I love to do!</div>


          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Basketball Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Piano Player
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Reema Zakout </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
