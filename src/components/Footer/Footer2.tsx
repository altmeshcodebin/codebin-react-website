import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoFooter from "../../assets/img/CodeBinLogoWhite.svg";
import { FooterData } from "../../data/footer";
import FooterTopBg from "../../assets/img/Vector2.png";

const Footer2 = () => {
  return (
    <footer
      className="bg-gray-300 bg-no-repeat pt-24 md:bg-contain"
      style={{ backgroundImage: `url(${FooterTopBg})` }}
    >
      <Container fluid className="bg-[#2C3440] pb-24 pt-8">
        <Row className="flex flex-col">
          <Col className="flex flex-col items-center">
            <img className="w-48" src={LogoFooter} alt="" />
            <p className="max-w-lg py-4 text-white">
              Excepteur pariatur cupidatat amet excepteur laborum reprehenderit
              anim do cillum ex irure. In magna reprehenderit mollit esse
              fugiat. In ea qui excepteur ullamco
            </p>
          </Col>
          <Col className="flex justify-center  pb-4 max-[768px]:flex-col max-[768px]:gap-2 min-[768px]:gap-8">
            {FooterData.map((item, index) => (
              <a
                key={item.id}
                className="text-center text-lg capitalize text-white no-underline"
                href={item.Link}
              >
                {item.Title}
              </a>
            ))}
          </Col>
          <Col className="flex justify-center">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
