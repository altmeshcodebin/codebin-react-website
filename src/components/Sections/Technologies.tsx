import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TechnologiesData } from "../../data/technologies";
import { SectionHeading } from "../Utils";

const Technologies = () => {
  return (
    <Container fluid className="flex bg-stone-100 py-12">
      <Container>
        <Row className="text-left text-red-600">
          <Col>
            <SectionHeading title="Technologies" />
          </Col>
        </Row>
        <Row className="px-3 pt-8 max-[768px]:justify-between  md:justify-center md:gap-4">
          {TechnologiesData.map((item, index) => (
            <Col className="p-2" md="2" xs="6" key={item.id}>
              <div className="rounded-bl-lg flex flex-col justify-center rounded-tr-lg bg-white p-4 h-full text-slate-900 shadow-xl shadow-slate-200 duration-300 ease-in-out hover:scale-110 hover:text-red-600 hover:shadow-2xl">
                <FontAwesomeIcon
                  icon={item.techIconName}
                  size="2x"
                  className="mb-2"
                />
                <h4 className="m-0 text-lg">{item.techName}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Technologies;
