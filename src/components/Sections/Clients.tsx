import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDataLogo } from "../../data/portfolio";
import { SectionHeading } from "../Utils";

const Clients = () => {
  return (
    <>
      <Container fluid className="bg-sky-50 py-12 text-center text-slate-900">
        <Row className="max-[768px]:text-left md:text-center">
          <Col className="flex-center flex flex-col max-[768px]:text-left md:items-center">
            <SectionHeading title="Our Clients" />
            <p className="mb-8 max-w-[700px] text-lg text-gray-500">
              Excepteur nisi adipisicing eiusmod sunt magna ullamco ea ipsum
              dolore est tempor amet. Ullamco consequat anim veniam do cillum ut
              non in sint eiusmod.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="items-center justify-center bg-slate-200 p-6">
          {PortfolioDataLogo.map((item, index) => (
            <Col md="1" xs="4">
              <div key={item.id} className="flex justify-center">
                <img
                  className="h-[5rem] w-[5rem] bg-contain object-contain grayscale duration-300 ease-in-out hover:scale-110 hover:grayscale-0"
                  src={item.logo}
                  alt={item.alt}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Clients;
