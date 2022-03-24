import React from "react";
import "../css/sec-style/skills-style.css";
import CardSkills from "../components/CardSkills";
import { Row, Col, Container } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="container-fluid py-5 skills-container" id="skills">
      <div className="container header-container pt-3">
        <h2>
          Technical <span> Skills </span>
        </h2>
        <Row className="py-5" >
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/html.png")} title="HTML" alt="HTML"/>
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/css.png")} title="CSS" alt="CSS"/>
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/bootstrap.png")} title="BOOTSTRAP" alt="BOOTSTRAP" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/js.png")} title="JAVASCRIPT" alt="JS"/>
          </Col>
        </Row>
        <Row className="pb-5" >
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/nodejs.png")} title="NODEJS" alt="NODEJS" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/react.png")} title="REACT" alt="REACT"/>
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/python.png")} title="PYTHON" alt="PYTHON"/>
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center" >
            <CardSkills img={require("../images/java.png")} title="JAVA" alt="JAVA"/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
