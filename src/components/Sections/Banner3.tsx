import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerbg from "../../assets/img/BannerImage.png";
import { SectionHeading } from "../Utils";

const Banner3 = () => {
  return (
    <section
      className="h-screen w-full bg-zinc-100 bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <Container className="itens-center h-full content-center justify-center">
        <Row className="itens-center h-full justify-center">
          <Col className="itens-center h-full justify-center">
            <SectionHeading title="Proident adipisicing fugiat aliqua ex Lorem excepteur" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner3;
