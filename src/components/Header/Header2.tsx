import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/img/CodeBinLogo.svg";
import logomobile from "../../assets/img/CodeBinLogoSquareMOno.svg";

const Header2 = () => {
  return (
    <Navbar expand={false} className="bg-slate-900 py-2">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="w-48 max-[768px]:hidden md:block" src={logo} alt="" />
          <img
            className="h-12 w-12 sm:block md:hidden"
            src={logomobile}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white outline-0"
          aria-controls={`offcanvasNavbar-expand-${false}`}
        >
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          className="bg-dark"
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            closeVariant="white"
            className="text-white"
          >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link className="text-white" href="#action2">
                Technologies
              </Nav.Link>
              <Nav.Link href="#action1" className="text-white">
                Clients
              </Nav.Link>
              <Nav.Link className="text-white" href="#action2">
                About
              </Nav.Link>
              <Nav.Link className="text-white" href="#JoinUs">
                Join Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header2;
