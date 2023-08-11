import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Authorization';

import Airport from './Airport/Airport';
import Login from './Header/Login';
import SignUp from './Header/SignUp';
import Siteinfo from './Header/Siteinfo';
import Mapsearch from './Header/Mapsearch';
import AirportInfo from './Header/AirportInfo';
import Notice from './Header/Notice';
import Gallery from './Header/Gallery';
import Welcome from './Header/Welcome';
import LoginedAirport from './Header/LoginedAirport';


function App() {
  
  return (    //라턴안에는 태그 한개만 존재 자식은 상관없음
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Airport />}></Route>
          <Route path='/siteinfo' element={<Siteinfo />}></Route>
          <Route path='/mapsearch' element={<Mapsearch />}></Route>
          <Route path='/airportInfo' element={<AirportInfo />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/notice' element={<Notice />}></Route>          
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/dashboard' element={<LoginedAirport />}></Route>
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
    
  
    
  );
}

export default App;