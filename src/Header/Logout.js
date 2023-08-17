// Airport/Logout.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization';

const Logout = () => {
    const navi = useNavigate();
    const { logout } = useContext(AuthContext);
  
    const handleLogout = () => {    
      logout();        
      const pastDate = new Date(0).toUTCString();
      document.cookie = `token=; path=/; expires=${pastDate}; HttpOnly`;  
      alert('로그아웃되었습니다.')
      navi('/');
    };
  
    return (
      <div>
        <h1>로그아웃</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    );
  };
  
  export default Logout;
  