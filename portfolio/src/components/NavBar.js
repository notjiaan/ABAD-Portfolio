import React from "react";
import "../css/comp-style/comp-style.css";
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <>
      {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand px-2">
            Portfo<span>lio.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="#about">Works</a>
              </li>
              <li className="nav-item">
                <a href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Navbar
        className="navbar fixed-top navbar-expand-lg navbar-dark "
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="navbar-brand px-2" href="#home">
            Portfo<span>lio.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" navbar-nav ms-auto">
              <Nav.Link className="nav-item" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-item" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Work
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
