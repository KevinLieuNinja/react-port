import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Kevin Lieu
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            this was made by kevin lieu.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
