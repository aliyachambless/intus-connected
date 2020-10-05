import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import connected from '../assets/connected-logos-indigo.png';
import '../styles/Utilities.scss';

configureAnchors({ scrollDuration: 700 });

const Connected = () => {
  return (
    <div className="h-100 w-100 bg-white d-flex flex-row justify-content-center align-items-center" >
      <img src={connected} alt="Connected logo" className="img70"/>
    </div>
  )
}

export default Connected;