import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navi = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    // 아이디 또는 비밀번호 미입력
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

      if (response.ok) {
        // 응답이 JWT 토큰을 포함하는 경우
        const token = await response.text();

        // 토큰을 쿠키로 저장
        document.cookie = `token=${encodeURIComponent(token)}; path=/;`;

        alert('로그인 성공! 환영합니다!');
        setIsLoggedIn(true);
        navi('/');
      } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error: ', error);
      alert('알 수 없는 오류로 로그인에 실패하였습니다. 나중에 다시 시도해주세요.');
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
        <div className="flex">
          <label htmlFor="username">
            아이디
            <input type="text" id="username" name="username" placeholder='아이디를 입력하세요*' onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label htmlFor="password">
            비밀번호
            <input type="password" id="password" name="password" placeholder='비밀번호를 입력하세요*'onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div className='checkbox'>
          <input type="checkbox" id="flexCheckDefault" name="flexCheck" />
          <label htmlFor="flexCheckDefault">Remember password</label>
        </div>
        <a href='#'>비밀번호를 잊어버리셨나요?</a>
        
        <button type="submit" className='bt1'>로그인</button>

        <h6>아이디가 없으신가요?</h6>
        <button type="button" className='bt1' onClick={handleSignup}>회원가입</button>
        
      </form>
      
    </div>
    </>
  );
};

export default Login;