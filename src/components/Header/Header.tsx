import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/CodeBinLogo.svg";
import logomobile from "../../assets/img/CodeBinLogoSquareMOno.svg";
import { CBButton } from "../CBButton";

const Header = () => {
  return (
    <Navbar fixed="top" className="bg-blur bg-slate-900/70">
      <Navbar.Brand className="py-2 pl-8">
        <img className="w-48 max-[768px]:hidden md:block" src={logo} alt="" />
        <img className="h-12 w-12 sm:block md:hidden" src={logomobile} alt="" />
      </Navbar.Brand>
      <div className="ml-auto py-2 pr-8 max-[768px]:hidden">
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
