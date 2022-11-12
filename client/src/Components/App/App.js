import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function App() {
  let location = useLocation();

  return (
    <div className="App">
      {location === '/' || '/loading'? null : <Navbar/>}
        <Routes>
          <Route exact path='/' element={<Loading />}>
          </Route>
          <Route path='/loading' element={<Loading />}>
          </Route>

          {/* <Route path='/login' element={<Login setUser={setUser} setPoints={setPoints}/>}>
          </Route>
          <Route path='/signup' element={<Signup setUser={setUser}/>}>
          </Route>
          <Route path='/mypage' element={<MyPage user={user} setPoints={setPoints} points={points}/>}>
          </Route> */}
        </Routes>
      {location === '/' || '/loading'? null : <Footer/>}
    </div>
  );
}

export default App;
