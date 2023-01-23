import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../../assets/img/CodeBinLogo.svg";
import logomobile from "../../assets/img/CodeBinLogoSquareMOno.svg";
import { CBButton } from "../CBButton";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      className="bg-[#222831]"
    >
      <Navbar.Brand className="px-8 py-2">
        <img
          className="w-48 md:block max-[768px]:hidden"
          src={logo}
          alt=""
        />
        <img
          className="w-12 h-12 md:hidden sm:block"
          src={logomobile}
          alt=""
        />
      </Navbar.Brand>
      <div className="ml-auto px-8">
        <CBButton title="Join us" />
      </div>
      <Navbar.Toggle>
        <Nav.Link>Services</Nav.Link>
        <Nav.Link>Services</Nav.Link>
        <Nav.Link>Services</Nav.Link>
        <Nav.Link>Services</Nav.Link>
      </Navbar.Toggle>
    </Navbar>
  );
};

export default Header;
