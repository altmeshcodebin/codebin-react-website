import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServiceData } from "../../data/services";
import { SectionHeading } from "../Utils";

const Services = () => {
  return (
    <Container fluid className="bg-[#FAFAFA] py-4">
      <Container>
        <Row className="text-left">
          <Col>
            <SectionHeading title="Our Services" />
          </Col>
        </Row>
        <Row className="">
          {ServiceData.map((item, index) => (
            <Col md="4" className="py-2" key={item.id}>
              <div className="service-wrapper my-2 flex flex h-full w-full flex-col flex-col justify-center rounded-lg bg-gray-100 p-4 text-left">
                <div className="mb-2 flex w-full items-center">
                  {item.serviceIcon ? (
                    <div className="mr-4 flex h-20 w-20 items-center justify-center rounded bg-red-600 text-white duration-300 ease-in-out hover:scale-110">
                      <FontAwesomeIcon
                        icon={item.serviceIcon}
                        className="p-4 text-4xl"
                      />
                    </div>
                  ) : null}
                  <h3 className="mb-0 text-xl font-semibold">
                    {item.serviceName}
                  </h3>
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
