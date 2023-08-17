import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { AuthProvider } from './Authorization';

import Airport from './Airport/Airport';
import Login from './Header/Login';
import SignUp from './Header/SignUp';
import Siteinfo from './Header/Siteinfo';
import Mapsearch from './Header/Mapsearch';
import AirportInfo from './Header/AirportInfo';
import Notice from './Header/Notice';
import GetNotice from './Header/GetNotice'
import InsertNotice from './Header/InsertNotice';
import UpdateNotice from './Header/UpdateNotice'
import DeleteNotice from './Header/DeleteNotice';
import Gallery from './Header/Gallery';
import GetGallery from './Header/GetGallery';
import InsertGallery from './Header/InsertGallery'
import UpdateGallery from './Header/UpdateGallery'
import DeleteGallery from './Header/DeleteGallery';


function App() {
  
  return (    //라턴안에는 태그 한개만 존재 자식은 상관없음
    <AuthProvider>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Airport />}></Route>          
          <Route path='/siteinfo' element={<Siteinfo />}></Route>
          <Route path='/airportInfo' element={<AirportInfo />}></Route>
          <Route path='/notice' element={<Notice />}></Route>
          <Route path='/getNotice/:id' element={<GetNotice />}></Route>
          <Route path='/insertNotice' element={<InsertNotice />}></Route>
          <Route path='/updateNotice/:id' element={<UpdateNotice />}></Route>
          <Route path='/deleteNotice/:id' element={<DeleteNotice />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/getGallery/:id' element={<GetGallery />}></Route>
          <Route path='/insertGallery' element={<InsertGallery />}></Route>
          <Route path='/updateGallery/:id' element={<UpdateGallery />}></Route>
          <Route path='/deleteGallery/:id' element={<DeleteGallery />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>          
          <Route path="/mapsearch" element={<Mapsearch key={window.location.pathname + window.location.search} />} />
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
    
  
    
  );
}

export default App;