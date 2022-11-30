import './Loading.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import Welcome from './Welcome';
import Expanded from './Expanded';

function Loading({ skintypes }) {

  return (
    <div className="Loading">
      <Welcome />
      <Expanded skintypes={skintypes}/>
    </div>
  );
}

export default Loading;