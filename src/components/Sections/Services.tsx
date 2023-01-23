import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ServiceData} from "../../data/services";

const Services = () => {
  return (
    <Container
      fluid
      className="bg-[#FAFAFA] py-24"
    >
      <Container>
        <Row>
          <Col>
            <h2 className="text-left font-bold my-8 text-4xl">Our Services</h2>
          </Col>
        </Row>
        <Row className="py-12">
          {ServiceData.map((item, index) => (
            <Col
              className="flex mb-8"
              md={4}
              lg={4}
              key={item.id}
            >
              <div className="service-wrapper flex flex-col text-left w-full">
                <div className="flex w-full mb-2 items-center">
                  {item.serviceIcon ? (
                    <div className="mr-4 rounded bg-red-600 h-20 w-20 justify-center flex items-center">
                      <FontAwesomeIcon
                        color="white"
                        icon={item.serviceIcon}
                        className="text-4xl p-4"
                      />
                    </div>
                  ) : null}
                  <h3 className="text-2xl font-semibold mb-0">{item.serviceName}</h3>
                </div>
                <p className="mb-0 text-gray-500">{item.serviceDesc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Services;
