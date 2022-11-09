import './App.css';
import { Routes, Route } from 'react-router-dom';
import Loading from '../Loading/Loading';

function App() {
  return (
    <div className="App">
      {/* <Navbar user={user} setUser={setUser}/> */}
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
      {/* <Footer/> */}
    </div>
  );
}

export default App;
