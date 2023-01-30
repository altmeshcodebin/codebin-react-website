import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CBButton } from "../CBButton";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import TeamBg from "../../assets/img/bgteam.svg";
import { SectionHeading } from "../Utils";

const JoinUs = () => {
  return (
    <section
      id="JoinUs"
      className="bg-gray-300 bg-no-repeat max-[768px]:bg-bottom max-[768px]:py-12 md:bg-contain md:bg-right-top min-[768px]:py-36"
      style={{ backgroundImage: `url(${TeamBg})` }}
    >
      <Container>
        <Row>
          <Col md="8" className="self-center text-left">
            <SectionHeading title="Join us now" />
            <p className="max-w-[40rem] text-left text-lg text-gray-900">
              Nulla irure tempor excepteur aute sint ullamco sint nisi officia
              consequat ex ipsum. Ad adipisicing minim ipsum minim occaecat
              deserunt exercitation voluptate ullamco excepteur velit
              exercitation. Sint exercitation dolore sit nostrud. Ullamco magna
              do pariatur eiusmod. Est sint enim pariatur voluptate culpa minim
              non velit officia occaecat ipsum eiusmod sit. Minim dolore eiusmod
              ullamco elit deserunt sunt veniam sint mollit.
            </p>
          </Col>
          <Col md="4" className="p-8">
            <div className="rounded bg-zinc-900 p-4 text-left text-white">
              <Form>
                <Form.Group className="text-md mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact no.</Form.Label>
                  <Form.Control type="email" placeholder="Contact no." />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Resume</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFile" className="flex justify-end">
                  <CBButton buttonIcon={faRocket} title="Blastoff" />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;
