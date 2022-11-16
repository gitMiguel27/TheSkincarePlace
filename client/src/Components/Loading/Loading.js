// import './Loading.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

function Loading({ skintypes, selectSkintype }) {

  return (
    <div className="Loading">
      <Typography variant='h3'>Welcome to The Skincare Place!</Typography>
      <Typography variant='h5'>Choose Your Skin Type:</Typography>
      {
        skintypes.map(skintype => {
          return <Link to={skintype.name.toLowerCase()} key={skintype.id} onClick={selectSkintype} >{skintype.name}</Link>
        })
      }
      <Typography>Don't know your skin type?
        <br/>
        <a href='https://www.wikihow.com/Determine-Your-Skin-Type' target="_blank" rel="noopener noreferrer">Click Here</a>
      </Typography>

      <Typography>Have an account?
        <br/>
        Log-In
      </Typography>
    </div>
  );
}

export default Loading;