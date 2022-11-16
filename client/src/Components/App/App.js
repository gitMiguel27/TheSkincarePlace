import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SkinType from '../SkinType/SkinType';

function App() {
  let location = useLocation();
  console.log(location);

  const [skintypes, setSkintypes] = useState([]);

  useEffect(() => {
    fetch("/skin_types")
    .then(resp => resp.json())
    .then(skintypesData => {
      // console.log(skintypesData);
      setSkintypes(skintypesData);
    });
  }, []);

  const [skintypeRoute, setSkintypeRoute] = useState(null);
  const [selectedSkintype, setSelectedSkintype] = useState(null);

  function selectSkintype(event) {
    setSkintypeRoute(event.target.innerText.toLowerCase());
    const skintypeArray = skintypes.filter(skintype => skintype.name === event.target.innerText)
    const skintype = skintypeArray[0];
    setSelectedSkintype(skintype);
  };

  return (
    <div className="App">
      {location.pathname.endsWith('/') || location.pathname.endsWith('/loading')? null : <Navbar/> }
        <Routes>
          <Route exact path='/' element={<Loading selectSkintype={selectSkintype} skintypes={skintypes} />}>
          </Route>
          <Route path='/loading' element={<Loading selectSkintype={selectSkintype} skintypes={skintypes} />}>
          </Route>

          {/* URL Parameters react router ; skintype should load data indepently from url parameter (no need to pass in) */}
          <Route path={'/' + skintypeRoute} element={<SkinType selectedSkintype={selectedSkintype} />}>
          </Route>
          
          {/* <Route path='/login' element={<Login setUser={setUser} setPoints={setPoints}/>}>
          </Route>
          <Route path='/signup' element={<Signup setUser={setUser}/>}>
          </Route>
          <Route path='/mypage' element={<MyPage user={user} setPoints={setPoints} points={points}/>}>
          </Route> */}
        </Routes>
      {location.pathname.endsWith('/') || location.pathname.endsWith('/loading')? null : <Footer/> }
    </div>
  );
}

export default App;
