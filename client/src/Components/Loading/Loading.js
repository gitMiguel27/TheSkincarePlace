import './Loading.css';
import React, { useState, useEffect } from 'react';

function Loading() {

  const [skintypes, setSkintypes] = useState([]);

  useEffect(() => {
    fetch("/skin_types")
    .then(resp => resp.json())
    .then(skintypesData => {
      // console.log(skintypesData);
      setSkintypes(skintypesData);
    });
  }, []);

  return (
    <div className="Loading">
      <h1>Welcome to The Skincare Place!</h1>
      <h2>Choose Your Skin Type:</h2>
      {
        skintypes.map(skintype => {
          return <p key={skintype.id}>{skintype.name}</p>
        })
      }
      {/* <p>Dry <br/> Oily <br/> Combination <br/> Normal</p> */}

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