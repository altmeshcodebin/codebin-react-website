import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDataLogo } from "../../data/portfolio";
import { SectionHeading } from "../Utils";

const Portfolio = () => {
  return (
    <Container fluid className="bg-sky-50 py-12 text-slate-900">
      <Container className="flex flex-col items-center justify-center">
        <Row className="max-w-[700px] max-[768px]:text-left md:text-center">
          <Col>
            <SectionHeading title="Our Clients" />
            <p className="my-8 text-gray-500">
              Excepteur nisi adipisicing eiusmod sunt magna ullamco ea ipsum
              dolore est tempor amet. Ullamco consequat anim veniam do cillum ut
              non in sint eiusmod.
            </p>
          </Col>
        </Row>
        <Row className="justify-center">
          {PortfolioDataLogo.map((item, index) => (
            <Col md="2" xs="4">
              <div key={item.id} className="flex justify-center">
                <img
                  className="h-[10rem] w-[10rem] bg-contain object-contain grayscale duration-300 ease-in-out hover:scale-110 hover:grayscale-0"
                  src={item.logo}
                  alt={item.alt}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Portfolio;
