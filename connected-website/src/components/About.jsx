import React from 'react';
import Collapsible from './Collapsible';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Phone } from '../assets/iphone.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';
import { ReactComponent as Letter } from '../assets/paper_letter.svg';
import { ReactComponent as Bubbles } from '../assets/about_bubbles.svg';
import { ReactComponent as Circle } from '../assets/ellipse.svg';
import placeholder from '../assets/image_placeholder.png';
import gradientBubble from '../assets/color_gradient_bubble.png';
import '../styles/Utilities.scss';
import '../styles/About.scss';

configureAnchors({ scrollDuration: 700 });

const About = () => {
  return (
      <Collapsible>
      <div className="about-background">
        <div className="background" style={{ left: '-50vh', top: '325vh' }}>
        <Bubbles style={{ width: '133vw' }} />
        </div>
        <div className="background" style={{ left: '-50vh', top: '530vh' }}>
        <img src={gradientBubble} alt="Placeholder Image" className="img70" />
        </div>
      <Container
        fluid
        className="w-100 p-0 px-5"
      >
        <ScrollableAnchor id={'about'}>
          <div style={{ height: '5vh' }} />
        </ScrollableAnchor>
        <Row className="d-flex justify-content-center align-items-end text-white font-weight-bold p-5 m-5">
          <h1 className="p-0 m-0 extra-bold">about us.</h1>
        </Row>
        <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
          <h2 className="font-weight-bold text-white-60">who we are</h2>
        </Row>
        <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
          <p className="text-white px-4 py-5 mx-5">
           We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
         </p>
        </Row>
        <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
          <h2 className="font-weight-bold text-white-60">how</h2>
        </Row>
        <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
          <p className="text-white px-4 py-5 mx-5">
            We achieve this through weekly phone calls, video chats, and letters.
         </p>
        </Row>
        <Row className="d-flex flex-column align-items-center justify-content-around py-5 px-5 mx-4">
          <div className="d-flex flex-row align-items-end py-5">
            <Phone className="mx-4" style={{ fill: "#ffffff", height: '20vw' }} />
            <Mail className="mx-4" style={{ fill: "#ffffff", width: '15vw' }} />
            <Letter className="mx-4" style={{ fill: "#ffffff", height: '20vw' }} />
          </div>
        </Row>
        <Row className="px-5 mx-5 py-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
          <h2 className="font-weight-bold text-white">our team!</h2>
        </Row>
        <Row className="px-5 mx-5 pt-5 d-flex flex-row align-items-start justify-content-between">
          <p className="text-white pt-4" style={{ position: 'relative' }}>
            <div className="background" style={{ left: '-5vw', top: '-13vh' }}>
                <Circle style={{ width: '10vw' }} />
            </div>
        <Container
            fluid
            className="w-100 p-0 px-5"
        >
            <Row className="d-flex justify-content-center align-items-end text-white font-weight-bold p-5 m-5">
            <h1 className="p-0 m-0 extra-bold">about us.</h1>
            </Row>
            <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">who we are</h2>
            </Row>
            <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
            <p className="text-white px-4 py-5 mx-5">
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            </p>
            </Row>
            <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">how</h2>
            </Row>
            <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
            <p className="text-white px-4 py-5 mx-5">
                We achieve this through weekly phone calls, video chats, and letters.
            </p>
            </Row>
            <Row className="d-flex flex-column align-items-center justify-content-around py-5 px-5 mx-4">
            <div className="d-flex flex-row align-items-end py-5">
                <Phone className="mx-4" style={{ fill: "#ffffff", height: '20vw' }} />
                <Mail className="mx-4" style={{ fill: "#ffffff", width: '15vw' }} />
                <Letter className="mx-4" style={{ fill: "#ffffff", height: '20vw' }} />
            </div>
            </Row>
            <Row className="px-5 mx-5 py-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white">our team!</h2>
            </Row>
            <Row className="px-5 mx-5 pt-5 d-flex flex-row align-items-start justify-content-between">
            <p className="text-white pt-4" style={{ position: 'relative' }}>
                <div className="background" style={{ left: '-5vw', top: '-13vh' }}>
                    <Circle style={{ width: '10vw' }} />
                </div>
                Evan Jackson
            </p>
            <img src={placeholder} alt="Placeholder Image" className="img45" />
            </Row>
            <Row className="px-5 mx-5 pt-5 d-flex flex-row align-items-start justify-content-between">
            <p className="text-white pt-4" style={{ position: 'relative' }}>
                <div className="background" style={{ left: '5vw', top: '-12vh' }}>
                    <Circle style={{ width: '10vw' }} />
                </div>
                Joanne Won
            </p>
            <img src={placeholder} alt="Placeholder Image" className="img45" />
            </Row>
            <Row className="px-5 mx-5 py-5 d-flex flex-row align-items-start justify-content-between">
            <p className="text-white pt-4" style={{ position: 'relative' }}>
                <div className="background" style={{ left: '-5vw', top: '-9vh' }}>
                    <Circle style={{ width: '10vw' }} />
                </div>
                Sophia
            </p>
            <img src={placeholder} alt="Placeholder Image" className="img45" />
            </Row>
            <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold position-relative">
            <div className="background" style={{ left: '-60vh', top: '-50vh' }}>
            <img src={gradientBubble} alt="Placeholder Image" className="img70" />
            </div>
            <h2 className="font-weight-bold text-white-60">volunteers:</h2>
            </Row>
            <Row className="d-flex flex-column align-items-end justify-content-center py-5 px-5 mx-4">
            <p className="text-white px-4 pb-1 mx-5">
                Tommy
            </p>
            <p className="text-white px-4 pb-1 mx-5">
                Henry
            </p>
            <p className="text-white px-4 pb-1 mx-5">
                Kasey
            </p>
            <p className="text-white px-4 pb-1 mx-5">
                Sabrina
            </p>
            <p className="text-white px-4 pb-1 mx-5">
                Elizabeth
            </p>
            </Row>
            <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">about intuscare</h2>
            </Row>
            <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
            <p className="text-white px-4 py-5 mx-5">
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that. 
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.  
            We are a group of passionate college students who want to bridge the gap between generations to instill feelings of togetherness through virtual experiences. Feeling lack of human connection during COVID, we sought out a reason to change that.   
            </p>
            </Row>
        </Container>
        </div>
    </Collapsible>
  )
}

export default About;