import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CBButton } from "../CBButton";
import LogoFooter from "../../assets/img/CodeBinLogoSquareMOno.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <Container className="max-[768px]:py-24 md:py-16">
        <Row className="text-white">
          <Col
            md="4"
            className="flex flex-col justify-center text-white max-[768px]:mb-4 max-[768px]:items-center max-[768px]:justify-center min-[768px]:text-left"
          >
            <h4 className="min-[768px]:text-left">Address</h4>
            <p className="max-w-[270px] text-gray-400">
              Code-Bin, Plot No. 4, S.No. 131/1A/1, Mahavir Park, Baner
              Mahalunge Road, opp.Orchid School, Baner, Pune – 411045
            </p>
          </Col>
          <Col
            md="4"
            className="flex flex-col text-white md:items-center md:justify-center"
          >
            <img
              src={LogoFooter}
              alt=""
              className="mb-4 h-24 w-24 self-center bg-contain object-contain"
            />
            <h4 className="mb-4">Get connected</h4>
            <div>
              <a
                className="text-white hover:text-red-600"
                href="https://fb.com/"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a
                className="px-4 text-white hover:text-red-600"
                href="https://fb.com/"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a
                className="text-white hover:text-red-600"
                href="https://fb.com/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </div>
          </Col>
          <Col
            md="4"
            className=" flex flex-col justify-center text-white max-[768px]:items-center max-[768px]:pt-8 md:items-end"
          >
            <h4 className="mb-4">We are hiring</h4>
            <CBButton title="Join us" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
