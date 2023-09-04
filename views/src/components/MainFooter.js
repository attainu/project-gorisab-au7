import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainFooter = () => {
  return (
    <Container className='main-footer' fluid>
      <Row>
        <Col sm={3} className='shop-summary'>
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={2}>
          Online Hawker
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={3}>
        </Col>
      </Row>
    </Container>
  );
};

export default MainFooter;
