import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServiceData } from "../../data/services";
import { SectionHeading } from "../Utils";
import ServicesImg from "../../assets/img/services.png";
import ServicesBg from "../../assets/img/services-bg.jpg";

const Services = () => {
  return (
    <Container id="Services" fluid className="bg-[#FAFAFA] pt-4 pb-16">
      <Container>
        <Row className="text-left">
          <Col>
            <SectionHeading title="Our Services" />
          </Col>
        </Row>
        <Row>
          <Col md="8" className="max-[768px]:mt-108 max-[768px]:pt-72">
            <Row className="flex">
              {ServiceData.map((item, index) => (
                <Col md="6" className="pb-4" key={item.id}>
                  <div className="service-wrapper flex flex-col justify-center rounded-lg text-left ">
                    <div className="mb-2 flex items-center">
                      {item.serviceIcon ? (
                        <div className="mr-4 flex h-14 w-14 items-center justify-center rounded bg-red-600 text-red-600 duration-300 ease-in-out hover:scale-110">
                          <FontAwesomeIcon
                            icon={item.serviceIcon}
                            className="p-2 text-xl"
                            color="white"
                          />
                        </div>
                      ) : null}
                      <h3 className="mb-0 w-4/5 text-xl font-semibold">
                        {item.serviceName}
                      </h3>
                    </div>
                    <p className="mb-0 text-gray-500">{item.serviceDesc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            md="4"
            className="max-[768px]:absolute max-[768px]:left-0 max-[768px]:p-0"
          >
            <img
              className="w-full rounded-lg bg-contain bg-fixed object-contain max-[768px]:h-[250px] md:bg-cover min-[768px]:h-full"
              style={{ backgroundImage: `url(${ServicesBg})` }}
              src={ServicesImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Services;
