import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoFooter from "../../assets/img/CodeBinLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <Container className="max-[768px]:py-24 md:py-16">
        <Row className="text-white">
          <Col
            md="4"
            className="flex flex-col text-white max-[768px]:mb-12 md:text-left "
          >
            <img
              src={LogoFooter}
              alt=""
              className="w-52 bg-contain object-contain max-[768px]:self-center"
            />
            <div className="mb-4 mt-4 h-[1px] w-36 bg-red-600 max-[768px]:self-center md:mr-8 md:w-72" />
            <div>
              <a
                className="text-white hover:text-red-600"
                href="https://www.facebook.com/InvasionTech/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a
                className="px-4 text-white hover:text-red-600"
                href="https://www.instagram.com/codeb_in/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a
                className="text-white hover:text-red-600"
                href="https://www.linkedin.com/company/invasion-software-technologies-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </div>
          </Col>
          <Col
            md="4"
            className="float-right flex flex-col text-white max-[768px]:mb-4 max-[768px]:items-center max-[768px]:justify-center min-[768px]:text-left"
          >
            <h4 className="min-[768px]:text-left">Address</h4>
            <p className="text-gray-400 max-[768px]:max-w-[270px]">
              Code-Bin, Plot No. 4, S.No. 131/1A/1, Mahavir Park, Baner
              Mahalunge Road, opp.Orchid School, Baner
              <br />
              Pune – 411045
            </p>
          </Col>
          <Col
            md="4"
            className="float-right flex flex-col text-white max-[768px]:mb-4 max-[768px]:items-center max-[768px]:justify-center min-[768px]:text-left"
          >
            <h4 className="min-[768px]:text-left">Contact</h4>
            <a
              href="mailto:manas@code-b.in"
              color="white"
              className="flex items-center gap-2 no-underline"
            >
              <FontAwesomeIcon icon={faEnvelope} color="white" size="xl" />
              <p className="m-0 text-lg text-gray-400">manas@code-b.in</p>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
