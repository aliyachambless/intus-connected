import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Container, Row, Col } from 'react-bootstrap';
import connected from '../assets/connected-logos-indigo.png';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as WhiteCircle } from '../assets/white_circle.svg';
import '../styles/Utilities.scss';
import '../styles/NavBar.scss';

configureAnchors({ scrollDuration: 700 });

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 'home',
    };
  }

  render() {
    return (
      <div className="nav-bar w-50 h-50 overflow-hidden">
        <div className="subcat-wrap d-flex flex-row align-items-center">
          <a href={`#home`}>
            <h4
              className="subcat"
              onClick={() => this.setState({ focus: 'home' })}
            // style={{ position: 'fixed', bottom: 50, zIndex: 10, width: "6vw", opacity: `${this.state.focus && this.state.landingText ? 1 : 0}` }}
            >
              1 + home
          </h4>
          </a>
        </div>
        <div className="subcat-wrap">
          <a href={`#about`}>
            <h4
              className="subcat d-flex flex-row align-items-center"

              onClick={() => this.setState({ focus: 'about' })}
            // style={{ position: 'fixed', bottom: 50, zIndex: 10, width: "6vw", opacity: `${this.state.focus && this.state.landingText ? 1 : 0}` }}
            >
              2 + about
          </h4>
          </a>
        </div>
        <div className="subcat-wrap">
          <a href={`#impact`}>
            <h4
              className="subcat d-flex flex-row align-items-center"

              onClick={() => this.setState({ focus: 'impact' })}
            // style={{ position: 'fixed', bottom: 50, zIndex: 10, width: "6vw", opacity: `${this.state.focus && this.state.landingText ? 1 : 0}` }}
            >
              3 + impact
          </h4>
          </a>
        </div>
        <div className="subcat-wrap">
          <a href={`#involved`}>
            <h4
              className="subcat d-flex flex-row align-items-center"

              onClick={() => this.setState({ focus: 'involved' })}
            // style={{ position: 'fixed', bottom: 50, zIndex: 10, width: "6vw", opacity: `${this.state.focus && this.state.landingText ? 1 : 0}` }}
            >
              4 + get involved
          </h4>
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar;