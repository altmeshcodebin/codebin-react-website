import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/img/logodarkbg/CodeBinLogo.svg";
import logomobile from "../../assets/img/logodarkbg/CodeBinLogoSquareMOno.svg";
import { CBButton } from "../CBButton";

const Header = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          className="bg-blur bg-slate-900/70 px-4 py-3"
        >
          <Navbar.Brand href="/landingPage2" className="py-2 px-2">
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
              style={{ padding: "2.5rem" }}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="flex items-center text-center">
              <Nav className="justify-content-end flex-grow-1 pe-3 items-center gap-4 text-lg max-[768px]:text-xl">
                <a
                  href="/"
                  className="text-gray-200 no-underline hover:font-medium hover:text-red-600"
                >
                  landing Page 1
                </a>
                <a
                  href="/landingpage3"
                  className="text-gray-200 no-underline hover:font-medium hover:text-red-600"
                >
                  landing Page 3
                </a>
                <a
                  href="#Services"
                  className="text-gray-200 no-underline hover:font-medium hover:text-red-600"
                >
                  Services
                </a>
                <a
                  className=" text-gray-200 no-underline hover:font-medium hover:text-red-600"
                  href="#Technologies"
                >
                  Technologies
                </a>
                <a
                  href="#Clients"
                  className=" text-gray-200 no-underline hover:font-medium hover:text-red-600"
                >
                  Clients
                </a>
                <a
                  className=" text-gray-200 no-underline hover:font-medium hover:text-red-600"
                  href="#Team"
                >
                  About
                </a>
                <CBButton href="#JoinUs" title="Join Us" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
