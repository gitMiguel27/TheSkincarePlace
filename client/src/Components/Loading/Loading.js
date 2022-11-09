import './Loading.css';

function Loading() {
  return (
    <div className="Loading">
      <h3>Welcome to The Skincare Place!</h3>
      <h2>Choose Your Skin Type:</h2>
      <p>Dry <br/> Oily <br/> Combination <br/> Normal</p>

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