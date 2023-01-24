import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ServiceData} from "../../data/services";
import { SectionHeading } from "../Utils";

const Services = () => {
  return (
    <Container
      fluid
      className="bg-[#FAFAFA] py-4"
    >
      <Container>
        <Row className="text-left">
          <Col>
            <SectionHeading title="Our Services"/>
          </Col>
        </Row>
        <Row className="">
          {ServiceData.map((item, index) => (
            <Col
              md="4"
              className="py-2"
              key={item.id}
            >
              <div className="service-wrapper flex flex-col justify-center rounded-lg bg-gray-100 p-4 h-full my-2 flex flex-col text-left w-full">
                <div className="flex w-full mb-2 items-center">
                  {item.serviceIcon ? (
                    <div className="mr-4 text-white hover:scale-110 ease-in-out duration-300 rounded bg-red-600 h-20 w-20 justify-center flex items-center">
                      <FontAwesomeIcon
                        icon={item.serviceIcon}
                        className="text-4xl p-4"
                      />
                    </div>
                  ) : null}
                  <h3 className="text-xl font-semibold mb-0">{item.serviceName}</h3>
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
