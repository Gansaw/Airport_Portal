import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Authorization';
import LoginedHeader from './LoginedHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

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
      <Footer />
    </>
  );
};

export default LoginedAirport;
