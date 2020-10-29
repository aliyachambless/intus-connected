import React from 'react';
import Collapsible from './Collapsible';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row } from 'react-bootstrap';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as HandHeart } from '../assets/hand_heart.svg';
import { ReactComponent as Brain } from '../assets/brain_drawing.svg';
import { ReactComponent as Smiley } from '../assets/pink_smile.svg';
import { ReactComponent as Bridge } from '../assets/bridge.svg';
import '../styles/Utilities.scss';
import '../styles/Impact.scss';

configureAnchors({ scrollDuration: 700 });

const Impact = () => {
  return (
    <Collapsible subcat={'#impactFocus'} >
      <div className="impact-background">
        <div className="background" style={{ right: '-40vw', top: '170vh' }}>
          <Smiley style={{ fill: "#ffffff", width: '80vw' }} />
        </div>
        <Container
          fluid
          className="w-100 p-0 px-5"
        >
          <ScrollableAnchor id={'impact'}>
            <div style={{ height: '5vh' }} />
          </ScrollableAnchor>
          <Row className="d-flex justify-content-center align-items-end text-white font-weight-bold pt-5 pb-3 px-5 m-5">
            <h1 className="p-0 m-0 extra-bold">impact</h1>
            <Heart className="pb-4 pl-3" style={{ fill: "#ffffff", width: '4vw' }} />
          </Row>
          <Row className="d-flex flex-row text-wrap justify-content-center align-items-start pb-5">
            <div className="d-flex flex-column justify-content-center align-items-center px-2">
              <Brain style={{ fill: "#ffffff", width: '16vw' }} />
              <div className="pt-3">
                <h3 className="text-white">COVID Social Isolation</h3>
                <h3 className="text-white">and Mental Health</h3>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center px-3">
              <HandHeart style={{ fill: "#ffffff", width: '14.2vw' }} />
              <div className="pt-3">
                <h3 className="text-white">Fostering empathy</h3>
                <h3 className="text-white">among generations</h3>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center px-2">
              <Bridge style={{ fill: "#ffffff", width: '25vw' }} />
              <div className="pt-3">
                <h3 className="text-white">Building a bridge</h3>
                <h3 className="text-white">fighting ageism</h3>

              </div>
            </div>
          </Row>
          <ScrollableAnchor id={'impactFocus'}>
            <div style={{ height: '3vh' }} />
          </ScrollableAnchor>
          <Row className="px-5 mx-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">COVID Social Isolation</h2>
            <bk />
            <h2 className="font-weight-bold text-white-60"> and Mental Health</h2>
          </Row>
          <Row className="d-flex flex-column align-items-center justify-content-center py-3 px-5 mx-4">
            <div className="d-flex flex-row align-items-end">
              <Brain style={{ fill: "#ffffff", width: '18vw' }} />
            </div>
            <p className="text-white px-4 py-5 mx-5">
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
         </p>
          </Row>
          <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
            <p className="text-white px-4 py-3 mx-5">
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected h and elderly
        </p>
            <p className="text-white px-4 py-3 mx-5">
              connected fostering relationships between our youth and elderly
              connected by Intus Care elationships between our youth and elderly
        </p>
            <p className="text-white px-4 py-3 mx-5">
              enerational connection program fostering relationships between our youth and elderly
              connected by Intus Care elationships between our youth and elderly
        </p>
          </Row>
          <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white font-weight-bold">
            <h2 className="font-weight-bold text-white-60">fostering empathy</h2>
            <h2 className="font-weight-bold text-white-60">among generations</h2>
          </Row>
          <Row className="d-flex flex-column align-items-center justify-content-center py-5 px-5 mx-4">
            <div>
              <HandHeart style={{ fill: "#ffffff", width: '18vw' }} />
            </div>
          </Row>
          <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white">
            <h2 className="font-weight-bold text-white-60">building a bridge</h2>
            <p className="text-white px-4 mx-5">
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
         </p>
          </Row>
          <Row className="px-5 mx-5 pt-5 d-flex flex-column justify-content-left align-items-start text-white">
            <h2 className="font-weight-bold text-white-60">fighting ageism</h2>
            <p className="text-white px-4 pb-5 mx-5">
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
              connected by Intus Care is an intergenerational connection program fostering relationships between our youth and elderly
         </p>
          </Row>
        </Container>
      </div>
    </Collapsible>
  )
}

export default Impact;