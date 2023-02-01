import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServiceData } from "../../data/services";
import { SectionHeading } from "../Utils";

const Services2 = () => {
  return (
    <section id="Services" className="bg-gray-200 pt-4 pb-16">
      <Container>
        <Row className="mb-8">
          <Col className="flex flex-col items-center">
            <SectionHeading title="Services" />
            <p className="max-w-3xl text-[1.2rem] text-gray-700">
              Nisi aliquip tempor id qui consequat cillum ex voluptate nulla
              reprehenderit. Eiusmod culpa ad id amet nostrud. Nostrud labore
              commodo cupidatat excepteur aliquip voluptate do non mollit id
              consectetur. Magna velit mollit ipsum adipisicing consequat minim.
            </p>
          </Col>
        </Row>
        <Row>
          {ServiceData.map((item, index) => (
            <Col key={item.id} md={4} className="p-2">
              <div className="flex h-full flex-col overflow-hidden rounded-lg  bg-white duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
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
