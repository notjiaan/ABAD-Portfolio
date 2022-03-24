import React from "react";
import '../css/sec-style/about-style.css';
import { Row, Col, Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="container-fluid pt-5 pb-5 about-container" id="about">
        <div className="motto-container text-center px-5">
          <h4 className="py-3">" Stop chasing the money and start chasing the passion. "</h4>
          <p>- Tony Hsieh</p>
          <p>
            Money is essential but whats more important is that you are earning
            the money through things that you are passionate about.
          </p>
        </div>
        <Container className="text-center py-5">
          <Row>
            <Col sm={12} lg className="about-me-info-container my-auto">
              <h2 className="py-3">
                About <span>Me</span>
              </h2>
              <p className="about-me-paragraph">
                I am experienced working in teams and being in projects namely
                Software Engineering and Capstone that involved creating web and
                mobile applications. Looking to improve and cultivate my skills
                in web and app development and in software quality assurance.
              </p>
            </Col>
            <Col sm={12} lg className="d-flex justify-content-center">
              <div className="my-photo-container"></div>
              <img
                src={require("../images/my_photo4.png")}
                alt="My Photo"
                className="my-photo"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
