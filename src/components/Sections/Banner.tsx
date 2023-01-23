import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import mouse from "../../assets/img/mouse-scroll.gif";

const Banner = () => {
  return (
    <Container
      fluid
      className="bg-[#222831] flex-col h-screen flex md:justify-center"
    >
      <Row className="md:flex md:justify-center min-[768px]:gap-8 md:items-center max-[768px]:pt-36 max-[768px]:px-8">
        <Col md={3}>
          <h3 className="font-thin text-white text-7xl max-[768px]:text-left">
            Imagine<span className="text-red-600 text-9xl">.</span>
          </h3>
        </Col>
        <Col md={3}>
          <h3 className="text-white font-raguler text-7xl max-[768px]:text-left">
            Innovate<span className="text-red-600 text-9xl">.</span>
          </h3>
        </Col>
        <Col md={3}>
          <h3 className="text-red-600 font-semi-bold text-7xl max-[768px]:text-left">
            Create<span className="text-9xl">.</span>
          </h3>
        </Col>
      </Row>
      <div className="self-center absolute bottom-12 max-[768px]:hidden md:block">
        <img
          className="h-20 w-20"
          src={mouse}
          alt=""
        />
      </div>
    </Container>
  );
};

export default Banner;
