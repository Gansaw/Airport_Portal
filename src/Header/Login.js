import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authorization';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navi = useNavigate();
  const { login } = useAuth(); // login 함수 가져오기

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const token = await response.text();
        localStorage.setItem('token', token);
        alert('로그인 성공! 환영합니다!');
        login(); // login 함수 호출
        navi('/');
      } else {
        alert('로그인 실패! 아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  const handleSignup = () => {
    navi('/signup');
  };

  return (
    <>
      <h1>로그인</h1>
      <div className='logindiv'>
        <form onSubmit={handleLogin}>
          <div className='flex'>
            <label htmlFor='username'>
              아이디
              <input
                type='text'
                id='username'
                name='username'
                placeholder='아이디를 입력하세요*'
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor='password'>
              비밀번호
              <input
                type='password'
                id='password'
                name='password'
                placeholder='비밀번호를 입력하세요*'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className='checkbox'>
            <input type='checkbox' id='flexCheckDefault' name='flexCheck' />
            <label htmlFor='flexCheckDefault'>아이디 기억하기</label>
          </div>
          <button type='submit' className='bt1'>
            로그인
          </button>
          <h6>아이디가 없으신가요?</h6>
          <button type='button' className='bt1' onClick={handleSignup}>
            회원가입
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
