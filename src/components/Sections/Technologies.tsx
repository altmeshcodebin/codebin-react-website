import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TechnologiesData } from "../../data/technologies";

const Technologies = () => {
  return (
    <Container fluid className="flex bg-stone-100 md:py-24 py-12">
      <Container>
        <Row>
          <Col>
            <h2 className="my-8 text-left text-4xl font-bold">Technologies</h2>
          </Col>
        </Row>
        <Row className="pt-8 md:gap-4 px-3  md:justify-center max-[768px]:justify-between">
          {TechnologiesData.map((item, index) => (
            <Col
              md="2" xs="6"
              key={item.id}
              className="hover:shadow-2xl rounded-bl-lg rounded-tr-lg p-8 text-slate-900 shadow-xl shadow-slate-200 hover:text-red-600 bg-white ease-in duration-300"
            >
              <FontAwesomeIcon
                icon={item.techIconName}
                size="2x"
                className="mb-2"
              />
              <h4 className="m-0 text-lg">{item.techName}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Technologies;
