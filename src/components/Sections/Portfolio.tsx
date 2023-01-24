import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData, PortfolioDataLogo } from "../../data/portfolio";
import { SectionHeading } from "../Utils";

const Portfolio = () => {
  return (
    <Container fluid className="bg-sky-50 py-12 text-slate-900">
      <Container className="flex flex-col items-center justify-center">
        <Row className="max-w-[700px] max-[768px]:text-left md:text-center">
          <Col>
            <SectionHeading title="Portfolio" />
            <p className="my-8">
              Excepteur nisi adipisicing eiusmod sunt magna ullamco ea ipsum
              dolore est tempor amet. Ullamco consequat anim veniam do cillum ut
              non in sint eiusmod.
            </p>
          </Col>
        </Row>

        <Row className="py-8">
          {PortfolioData.map((item, index) => (
            <Col
              md="4"
              sm="12"
              key={item.id}
              className="flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded">
                <img
                  className="h-[250px] w-full bg-cover object-cover duration-300 ease-in-out hover:scale-125 hover:shadow-lg"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
              <div className="max-w-[400px] text-left max-[768px]:my-6 md:my-8">
                <h4 className="font-medium text-slate-900">
                  {item.clientName}
                </h4>
                <p className="text-slate-600">{item.projectDesc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="flex w-full justify-center">
        <Row>
          {PortfolioDataLogo.map((item, index) => (
            <Col md="2" xs="4">
              <div key={item.id}>
                <img
                  className="h-[100px] w-[100px] bg-cover object-cover duration-300 ease-in-out hover:animate-pulse"
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
