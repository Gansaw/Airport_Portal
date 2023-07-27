import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Airport from './Airport/Airport';
import Login from './Airport/Login';
import SignUp from './Airport/SignUp';
import Siteinfo from './Airport/Siteinfo';
import Mapsearch from './Airport/Mapsearch';
import AirportInfo from './Airport/AirportInfo';
import Gallery from './Airport/Gallery';
import Ratecal from './Airport/RateCal';

function App() {
  return (    //라턴안에는 태그 한개만 존재 자식은 상관없음
  //  <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Airport />}></Route>
  //       <Route path='/siteinfo' element={<Siteinfo />}></Route>
  //       <Route path='/mapsearch' element={<Mapsearch />}></Route>
  //       <Route path='/airportInfo' element={<AirportInfo />}></Route>
  //       <Route path='/gallery' element={<Gallery />}></Route>
  //       <Route path='/login' element={<Login />}></Route>
  //       <Route path='/signup' element={<SignUp />}></Route>
  //     </Routes>
   
  //  </BrowserRouter>
  <Ratecal />
  
    
  );
}

export default App;
