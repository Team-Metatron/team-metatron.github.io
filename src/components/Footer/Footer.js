import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center" md="12">
            <h1>Metatron</h1>
            <p>Team Metatron is an AI startup that provides cutting-edge AI/ML services, as well as web, standalone, and mobile app development using Java, React, and Flutter.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
