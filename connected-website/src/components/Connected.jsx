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
      className="d-flex bg-white flex-column w-100 p-0 justify-content-center align-items-center"
    >
      <Row className="vh-100 align-items-center">
        <div>
          <img src={connected} alt="Connected logo" className="img70 auto-height" />
        </div>
      </Row>
      <Row className="d-flex flex-row">
        {/* Make mobile-friendly */}
        <Col lg={4}>
          <h1> hi</h1>
        </Col>
        <Col lg={8}>
          <p className="text-indigo">
            connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Connected;