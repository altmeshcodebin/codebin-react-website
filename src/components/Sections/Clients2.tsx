import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDataLogo } from "../../data/portfolio";
const Clients2 = () => {
  return (
    <section id="Clients">
      <Container fluid>
        <Row className="items-center justify-center bg-slate-200 p-6">
          {PortfolioDataLogo.map((item, index) => (
            <Col md="1" xs="4" key={item.id}>
              <div className="flex justify-center">
                <img
                  className="h-[5rem] w-[5rem] bg-contain object-contain grayscale"
                  src={item.logo}
                  alt={item.alt}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Clients2;
