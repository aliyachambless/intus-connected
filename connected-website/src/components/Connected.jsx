import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import connected from '../assets/connected-logos-indigo.png';
import '../styles/Utilities.scss';

configureAnchors({ scrollDuration: 700 });

const Connected = () => {
  return (
    <Container
      fluid
      className="d-flex bg-white flex-column h-100 w-100 p-0 justify-content-center align-items-center"
    >
      <Row>
        <img src={connected} alt="Connected logo" className="img70" />
      </Row>
      <Row>
        {/* Make mobile-friendly */}
        <Col md={4}>
        </Col>
        <Col md={8}>
          <p></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Connected;