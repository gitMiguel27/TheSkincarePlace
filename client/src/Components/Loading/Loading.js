import './Loading.css';
import React from 'react';
import { Link } from "react-router-dom";

function Loading({ skintypes, selectSkintype }) {

  return (
    <div className="Loading">
      <h1>Welcome to The Skincare Place!</h1>
      <h2>Choose Your Skin Type:</h2>
      {
        skintypes.map(skintype => {
          return <Link to={skintype.name.toLowerCase()} key={skintype.id} onClick={selectSkintype} >{skintype.name}</Link>
        })
      }
      <p>Don't know your skin type?
        <br/>
        <a href='https://www.wikihow.com/Determine-Your-Skin-Type' target="_blank" rel="noopener noreferrer">Click Here</a>
      </p>

      <p>Have an account?
        <br/>
        Log-In
      </p>
    </div>
  );
}

export default Loading;