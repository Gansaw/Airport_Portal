import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navi = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    // 입력값 검증
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
        alert('로그인 성공! 환영합니다!');
        setIsLoggedIn(true);
        navi('/dashboard');
      } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
    //   console.error('Error: ', error);
      alert('알 수 없는 오류로 로그인에 실패하였습니다. 나중에 다시 시도해주세요.');
    }
  };

  const handleSignup = () => {
    navi('/signup'); 
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div className="grid">
          <label htmlFor="username">
            아이디
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label htmlFor="password">
            비밀번호
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">로그인</button>
        <button type="button" onClick={handleSignup}>회원가입</button>
      </form>
    </div>
  );
};

export default Login;
