import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TeamData } from "../../data/team";
import { SectionHeading } from "../Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import FeaturedImg from "../../assets/img/team/featured.png";

const Team = () => {
  return (
    <section id="Team" className="bg-slate-100 py-24">
      <Container>
        <Row className="pb-12 text-left">
          <Col>
            <SectionHeading title="meet our team" />
            <p className="text-lg">
              Incididunt incididunt nisi laboris aliqua nisi Lorem culpa aliqua
              do. Officia enim ipsum elit velit enim commodo. Labore aliquip
              reprehenderit cupidatat officia minim. Amet dolor eiusmod occaecat
              cupidatat. In nulla fugiat aliqua exercitation amet sit culpa
              dolore. Quis dolor anim tempor ad excepteur. Dolore mollit nisi
              tempor veniam enim aliquip nulla.
            </p>
          </Col>
        </Row>
        <Row className="">
          {TeamData.map((item, index) => (
            <Col
              md="3"
              className="relative h-full max-[768px]:p-1 min-[768px]:p-4"
              key={item.id}
            >
              <div className="overflow-hidden rounded bg-slate-200">
                <img
                  className="justify-center rounded"
                  src={item.img}
                  alt={item.alt}
                />
                <div className="px-2 py-3">
                  <h4>{item.name}</h4>
                  <p className="m-0">{item.designation}</p>
                  <a
                    href={item.social}
                    target="./blank "
                    className="absolute right-3 rounded bg-white p-3 text-black max-[768px]:top-1 md:top-4"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
