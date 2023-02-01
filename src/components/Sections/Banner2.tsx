import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerbg from "../../assets/img/bg-tech.png";

const Banner2 = () => {
  return (
    <section
      className="max-w-screen bg-cover bg-fixed bg-no-repeat object-cover max-[768px]:bg-auto max-[768px]:object-contain"
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <Container
        fluid
        className="h-full w-full  bg-black/75 py-64 text-white max-[768px]:py-48 max-[768px]:text-left"
      >
        <Row className="flex h-full content-center items-center justify-center md:px-48">
          <Col md={4} className="capitalize">
            <h1 className="text-5xl md:text-right">
              imagine<span className="text-red-600 md:text-7xl">.</span>
            </h1>
          </Col>
          <Col md={4}>
            <h1 className="text-5xl">
              Innovate<span className="text-red-600 md:text-7xl">.</span>
            </h1>
          </Col>
          <Col md={4}>
            <h1 className="text-5xl md:text-left">
              Create<span className="text-red-600 md:text-7xl">.</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner2;
