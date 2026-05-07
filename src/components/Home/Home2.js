import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I’m <b className="purple">Rahul Yadav</b>, a passionate{" "}
              <b className="purple">MERN Stack Developer</b> who loves building
              modern, responsive and user-friendly web applications.
              <br />
              <br />
              Currently, I’m focused on improving my skills in{" "}
              <i>
                <b className="purple">
                  React JS, Node JS, Express JS, MongoDB, Tailwind CSS
                </b>
              </i>{" "}
              and creating full stack projects with clean UI and scalable
              backend systems.
              <br />
              <br />
              I enjoy developing
              <i>
                <b className="purple">
                  {" "}
                  Portfolio Websites, Dashboard Panels, Authentication Systems,
                  REST APIs and Modern Web Applications
                </b>
              </i>
              {" "}that provide great user experiences.
              <br />
              <br />
              Recently, I’ve been working on exciting projects like{" "}
              <b className="purple">
                Quiz Apps, Amazon Clone, Portfolio Websites
              </b>{" "}
              and responsive frontend designs using{" "}
              <i>
                <b className="purple">React.js</b>,{" "}
                <b className="purple">Redux</b> and{" "}
                <b className="purple">Tailwind CSS</b>.
              </i>
              <br />
              <br />
              Apart from coding, I love learning new technologies, improving my
              problem-solving skills and turning creative ideas into real-world
              applications 🚀
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;