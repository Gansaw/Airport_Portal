// Airport/Logout.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
  
    const handleLogout = () => {    
      logout();  
      // 로그아웃을 위하여 쿠키 제거
      const pastDate = new Date(0).toUTCString();
      document.cookie = `token=; path=/; expires=${pastDate}; HttpOnly`;  
      navigate('/');
    };
  
    return (
      <div>
        <h1>로그아웃</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    );
  };
  
  export default Logout;
  