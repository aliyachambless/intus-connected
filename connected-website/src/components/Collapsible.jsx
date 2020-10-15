import React, { Component } from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import '../styles/Utilities.scss';
import '../styles/Collapsible.scss';
import { Button } from 'react-bootstrap';

configureAnchors({ scrollDuration: 700 });

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  toggleClass = () => {
    console.log(this.state.active);
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <div className="position-relative">
        <div className={this.state.active ? 'collapse-container open' : 'collapse-container closed'} >
          {this.props.children}
        </div>
        <a href={`#stopScroll`}>
          <Button variant="light" className="read-more" onClick={this.toggleClass} >{this.state.active ? 'see less' : 'read more'}</Button>
        </a>
      </div>
    )
  }
}

export default Collapsible;
