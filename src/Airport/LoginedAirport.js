import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Authorization';
import LoginedHeader from './LoginedHeader';
import Main from './Main';
import './Footer.css';

const LoginedAirport = () => {
  const { isLoggedIn } = useContext(AuthContext); 

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인을 진행해주세요.');
      window.location.href = '/login';
    }
  }, [isLoggedIn]);
  
  return (
    <>
      <LoginedHeader />
      <Main />
      <footer>
        <div className='info'>
          K-digital 3기 Mini Project<br />
          copyright 2023, 최호진, 손병희
        </div>
      </footer>
    </>
  );
};

export default LoginedAirport;
