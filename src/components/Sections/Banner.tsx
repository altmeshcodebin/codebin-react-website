import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mouse from "../../assets/img/mouse-scroll.gif";
import bannerbg from "../../assets/img/bannerbg.jpg";

const Banner = () => {
  return (
    <Container
      id="Banner"
      fluid
      className="relative flex h-screen flex-col justify-center bg-cover bg-fixed p-0 md:justify-center"
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <Row className="w-full max-[768px]:gap-4 max-[768px]:px-8 md:flex md:items-center md:justify-center min-[768px]:gap-8">
        <Col md={3}>
          <h3 className="font-thin text-white max-[768px]:text-left  max-[768px]:text-6xl md:text-7xl">
            Imagine<span className="text-red-600 md:text-9xl">.</span>
          </h3>
        </Col>
        <Col md={3}>
          <h3 className="font-raguler text-white max-[768px]:text-left  max-[768px]:text-6xl md:text-7xl">
            Innovate<span className="text-red-600 md:text-9xl">.</span>
          </h3>
        </Col>
        <Col md={3}>
          <h3 className="font-semi-bold text-red-600 max-[768px]:text-left  max-[768px]:text-6xl md:text-7xl">
            Create<span className="md:text-9xl">.</span>
          </h3>
        </Col>
      </Row>
      <div className="absolute bottom-12 self-center max-[768px]:hidden md:block">
        <img className="h-20 w-20" src={mouse} alt="" />
      </div>
    </Container>
  );
};

export default Banner;
