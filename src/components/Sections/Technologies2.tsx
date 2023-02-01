import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TechnologiesData } from "../../data/technologies";
import { SectionHeading } from "../Utils";

const Technologies2 = () => {
  return (
    <section id="Technologies" className="flex bg-stone-100 py-12">
      <Container>
        <Row className="mb-8">
          <Col className="flex flex-col items-center">
            <SectionHeading title="Technologies" />
            <p className="max-w-3xl text-[1.2rem] text-gray-700">
              Nisi aliquip tempor id qui consequat cillum ex voluptate nulla
              reprehenderit. Eiusmod culpa ad id amet nostrud. Nostrud labore
              commodo cupidatat excepteur aliquip voluptate do non mollit id
              consectetur. Magna velit mollit ipsum adipisicing consequat minim.
            </p>
          </Col>
        </Row>
        <Row className="max-[768px]:justify-between max-[768px]:p-4 ">
          {TechnologiesData.map((item, index) => (
            <Col md={3} xs={6} key={item.id} className="p-2 md:p-4">
              <div className="flex items-center">
                <div className="spin flex h-14 w-14 items-center justify-center rounded-lg bg-gray-900 p-2 text-[1.6rem] duration-300 ease-in-out hover:scale-105 hover:bg-red-600">
                  <FontAwesomeIcon
                    icon={item.techIconName}
                    className="text-white"
                  />
                </div>
                <h6 className="mr-0 mb-0 mt-0 ml-4 w-2/3 text-left">
                  {item.techName}
                </h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Technologies2;
