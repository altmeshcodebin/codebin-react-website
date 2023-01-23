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
            <Carousel indicators={false}>
              {PortfolioData.map((item, index) => (
                <Carousel.Item key={item.id}>
                  <div className="flex justify-between items-center">
                    <div className="w-1/2 text-left max-w-[400px] mr-12">
                      <h4>{item.clientName}</h4>
                      <p>{item.projectDesc}</p>
                    </div>
                    <div key={item.id} className="w-1/2">
                      <img
                        className="h-500 object-cover w-full object-cover duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                        src={item.image}
                        alt={item.alt}
                      />
                    </div>
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
