import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/img/logowhitebg/CodeBinLogo.svg";
import logomobile from "../../assets/img/logowhitebg/CodeBinLogoSquareMOno.svg";

const Header3 = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="py-3 px-3 backdrop-blur-md"
        >
          <Container>
            <Navbar.Brand href="/landingpage3" className="flex items-center">
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
              <h3 className="mb-0 ml-4 font-medium text-black min-[768px]:hidden">
                CodeBin
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle
              className="border-0 text-black shadow-none"
              aria-controls={`offcanvasNavbar-expand-${false}`}
            >
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
              className="border-0"
            >
              <Offcanvas.Header closeButton className="border-0">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="flex items-center text-center ">
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 text-lg max-[768px]:text-xl">
                  <a
                    href="/"
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
                  >
                    landingPage1
                  </a>
                  <a
                    href="/landingPage2"
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
                  >
                    landingPage2
                  </a>
                  <a
                    href="#Services"
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
                  >
                    Services
                  </a>
                  <a
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
                    href="#Technologies"
                  >
                    Technologies
                  </a>
                  <a
                    href="#Clients"
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
                  >
                    Clients
                  </a>
                  <a
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
                    href="#Team"
                  >
                    About
                  </a>
                  <a
                    className="rounded p-2 text-black no-underline hover:bg-zinc-50/60 hover:font-medium hover:text-red-600"
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

export default Header3;
