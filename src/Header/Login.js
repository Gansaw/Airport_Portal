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
  
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
  
    try {
      const response = await fetch('/login', {
        method: 'POST', // 로그인 요청은 POST 메서드로 보내야 합니다.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.status === 200) { // 변경: 성공적으로 응답이 왔을 때
        const token = await response.text();
        localStorage.setItem('token', token);
  
        alert('로그인 성공! 환영합니다!');
        setIsLoggedIn(true);
  
        try {
          // 이하 코드가 수정된 부분입니다.
          const userResponse = await fetch('/get_user_info', { // 적절한 API 경로로 변경
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (userResponse.ok) {
            const userData = await userResponse.json();
            const userRole = userData.role; // 사용자의 역할 정보 (USER, ADMIN 등)
  
            if (userRole === 'ROLE_USER') { // Spring Boot에서 사용하는 역할과 일치하도록 수정
              navi('/user/main'); // USER의 경우 유저 메인 페이지로 이동
            } else if (userRole === 'ROLE_ADMIN') {
              navi('/admin/main'); // ADMIN의 경우 어드민 메인 페이지로 이동
            }
          } else {
            console.error('Error getting user info');
          }
        } catch (error) {
          console.error('Error getting user info:', error);
        }
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
        {/* <a href='#'>비밀번호를 잊어버리셨나요?</a> */}
        
        <button type="submit" className='bt1'>로그인</button>

        <h6>아이디가 없으신가요?</h6>
        <button type="button" className='bt1' onClick={handleSignup}>회원가입</button>
        
      </form>
      
    </div>
    </>
  );
};

export default Login;