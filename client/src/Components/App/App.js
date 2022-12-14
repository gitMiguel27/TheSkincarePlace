import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SkinType from '../SkinType/SkinType';
import Recommended from '../Recommended/Recommended';
import About from '../About/About';
import { CssBaseline } from '@mui/material';

function App() {
  let location = useLocation();
  // console.log(location);

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
    <div className="App">
      <CssBaseline />
      {location.pathname.endsWith('/') || location.pathname.endsWith('/landing')? null : <Navbar/> }
        <Routes>
          <Route exact path='/' element={<Landing skintypes={skintypes} />}>
          </Route>
          <Route path='/landing' element={<Landing skintypes={skintypes} />}>
          </Route>
          <Route path='/Recommended' element={<Recommended skintypes={skintypes} />}>
          </Route>
          <Route path='/About' element={<About />}>
          </Route>

          {/* URL Parameters react router ; skintype should load data independently from url parameter (no need to pass in) */}
          {/* <Route path={'/' + skintypeRoute} element={<SkinType selectedSkintype={selectedSkintype} />}>
          </Route> */}
          <Route path="/:id" element={<SkinType skintypes={skintypes}/>}>
          </Route>
          
          {/* <Route path='/login' element={<Login setUser={setUser} setPoints={setPoints}/>}>
          </Route>
          <Route path='/signup' element={<Signup setUser={setUser}/>}>
          </Route>
          <Route path='/mypage' element={<MyPage user={user} setPoints={setPoints} points={points}/>}>
          </Route> */}
        </Routes>
      {location.pathname.endsWith('/') || location.pathname.endsWith('/landing')? null : <Footer/> }
    </div>
  );
}

export default App;
