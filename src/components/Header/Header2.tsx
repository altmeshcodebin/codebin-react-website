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
    <>
      {["sm"].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="bg-neutral-900/80 py-2 backdrop-blur-md"
        >
          <Container>
            <Navbar.Brand href="#">
              <img
                className="w-48 max-[768px]:hidden md:block"
                src={logo}
                alt=""
              />
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
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="flex items-center text-center">
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 text-lg max-[768px]:text-xl">
                  <a
                    href="#Services"
                    className="text-gray-200 no-underline hover:text-red-600"
                  >
                    Services
                  </a>
                  <a
                    className=" text-gray-200 no-underline hover:text-red-600"
                    href="#Technologies"
                  >
                    Technologies
                  </a>
                  <a
                    href="#Clients"
                    className=" text-gray-200 no-underline hover:text-red-600"
                  >
                    Clients
                  </a>
                  <a
                    className=" text-gray-200 no-underline hover:text-red-600"
                    href="#Team"
                  >
                    About
                  </a>
                  <a
                    className="text-gray-200 no-underline hover:text-red-600"
                    href="#JoinUs"
                  >
                    Join Us
                  </a>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header2;
