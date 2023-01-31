import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServiceData } from "../../data/services";
import { SectionHeading } from "../Utils";
import ServicesBg from "../../assets/img/services-bg.jpg";

const Services2 = () => {
  return (
    <section className="bg-gray-200 pt-4 pb-16">
      <Container>
        <Row>
          <Col>
            <SectionHeading title="Services" />
          </Col>
        </Row>
        <Row>
          {ServiceData.map((item, index) => (
            <Col key={item.id} md={4} className="p-2">
              <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white">
                <img
                  className="h-48 w-full object-cover"
                  src={item.serviceImage}
                  alt=""
                />
                <div className="p-4">
                  <h3>{item.serviceName}</h3>
                  <p>{item.serviceDesc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services2;
