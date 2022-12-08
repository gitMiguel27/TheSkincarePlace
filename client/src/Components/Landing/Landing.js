import './Landing.css';
import React from 'react';
import Welcome from './Welcome';
import Expanded from './Expanded';

function Landing({ skintypes }) {

  return (
    <div className="Landing">
      <Welcome />
      <Expanded skintypes={skintypes}/>
    </div>
  );
}

export default Landing;