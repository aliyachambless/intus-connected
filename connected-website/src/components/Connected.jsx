import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import { Link, withRouter } from 'react-router-dom';
import connected from '../assets/connected-logos-indigo.png';

configureAnchors({ scrollDuration: 700 });

const Connected = () => {
  return (
    <ScrollableAnchor id={'film'}>
    <div className="h-100 w-100 bg-white d-flex flex-row justify-content-center align-items-center">
      <img src={connected} alt="Connected logo" />
    </div>
    </ScrollableAnchor>
  )
}

export default Connected;