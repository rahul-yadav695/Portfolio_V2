import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Rahul Yadav</span> from{" "}
            <span className="purple">Rajasthan, India.</span>
            <br />
            I am a passionate{" "}
            <span className="purple">Frontend & MERN Stack Developer</span>
            {" "}with experience in building modern, responsive and user-friendly
            web applications.
            <br />
            I love creating attractive UI designs using{" "}
            <span className="purple">React JS, Tailwind CSS, JavaScript</span>
            {" "}and working with backend technologies like{" "}
            <span className="purple">Node JS, Express JS & MongoDB</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Modern Websites 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Create. Innovate."{" "}
          </p>

          <footer className="blockquote-footer">
            Rahul Yadav
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;