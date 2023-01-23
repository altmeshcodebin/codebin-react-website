import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { PortfolioData } from "../../data/portfolio";
import { SectionHeading } from "../Utils";

const Portfolio = () => {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container className="flex flex-col items-center justify-center">
        <Row className="max-w-[700px] text-center">
          <Col>
            <SectionHeading title="Portfolio" />
            <p className="my-8">
              Excepteur nisi adipisicing eiusmod sunt magna ullamco ea ipsum
              dolore est tempor amet. Ullamco consequat anim veniam do cillum ut
              non in sint eiusmod. Tempor labore proident consequat minim minim
              aute reprehenderit eu deserunt ex. Non dolor consectetur ipsum ea
              ullamco consequat ad. Cillum ea irure duis nulla aliquip qui
              occaecat. Tempor do eiusmod cillum ex cupidatat ut duis minim quis
              commodo.
            </p>
          </Col>
        </Row>

        <Row className="py-8">
          <Col>
            <Carousel>
              {PortfolioData.map((item, index) => (
                <Carousel.Item>
                  <Carousel.Caption>
                    <h4 style={{color: item.textcolor}}>{item.clientName}</h4>
                    <p style={{color: item.textcolor}}>{item.projectDesc}</p>
                  </Carousel.Caption>
                  <div className="">
                    <img className="hover:scale-125 rounded ease-in-out duration-300" src={item.image} alt={item.alt} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
