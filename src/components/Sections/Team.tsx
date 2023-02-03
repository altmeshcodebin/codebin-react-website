import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TeamData } from "../../data/team";
import { SectionHeading } from "../Utils";
import ManasProfile from "../../assets/img/team/ManasProfile.jpg";
import TeamTopBg from "../../assets/img/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Team2 = () => {
  return (
    <section id="Team">
      <Container fluid className="bg-[#2C3440]">
        <Container className="pt-12">
          <Row>
            <Col className="flex flex-col text-left text-white">
              <SectionHeading title="Meet Our Team" />
              <p className="text-left text-[1.2rem] text-gray-100">
                We are a crazy bunch who scribble on bean bags, munch samosas,
                play poker and leg cricket on weekends and work hard for our
                clients.
                <b className="text-red-600">
                  There is no special chair for the Boss and every designer here
                  knows programming.
                </b>
                We like being unconventional and innovative
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className="w-full bg-slate-900 bg-no-repeat md:bg-contain"
        style={{ backgroundImage: `url(${TeamTopBg})` }}
      >
        <Container>
          <Row className="mt-12 justify-center pt-12">
            <Col md="4">
              <img className="rounded-lg" src={ManasProfile} alt="" />
            </Col>
            <Col
              md="8"
              className="flex flex-col justify-end text-left max-[768px]:pt-8"
            >
              <h2 className="font-bold text-red-600">Manas Usharia</h2>
              <p className="text-gray-200">Lead Full Stack Engineer</p>
              <p className="mt-2 text-gray-200">
                Cupidatat deserunt nisi reprehenderit sit quis commodo est eu.
                Aliquip ea do Lorem reprehenderit aliqua. Incididunt enim
                aliquip id magna amet labore do laborum. Labore incididunt
                reprehenderit consequat cillum ad id qui.
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="/"
                  target="./blank"
                  className="text-white hover:text-red-600"
                >
                  <FontAwesomeIcon size="xl" icon={faLinkedinIn} />
                </a>
                <a
                  href="/"
                  target="./blank"
                  className="text-white hover:text-red-600"
                >
                  <FontAwesomeIcon size="xl" icon={faInstagram} />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="flex justify-center pb-12 max-[768px]:pt-12 md:pt-24 ">
            {TeamData.map((item) => (
              <Col md="2" sm="6" xs="4" className="" key={item.id}>
                <img
                  className="h-24 w-24 rounded-lg bg-cover object-cover duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-white hover:shadow-lg max-[768px]:mb-4 md:h-44 md:w-44"
                  src={item.img}
                  alt=""
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Team2;
