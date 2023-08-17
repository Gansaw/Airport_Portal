import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');


  const navi = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!agreementChecked) {
      alert("이용약관에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);

    const member = {
      username,
      password,      
      role: '회원',
      enabled: true,
    };

    axios.post('http://10.125.121.186:8080/signup', member, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log("success", response);
        alert('회원가입이 완료되었습니다.')
        navi('/');
      })
      .catch((error) => {
        console.log("fail", error.response);
        
        const errorMessage = error.response?.data?.message; // Safely access the error message
        if (errorMessage) {
          if (errorMessage.includes("중복된 아이디")) {
            setUsernameError(errorMessage);
            setNicknameError(''); // Clear the nickname error message
          } else if (errorMessage.includes("중복된 닉네임")) {
            setNicknameError(errorMessage);
            setUsernameError(''); // Clear the username error message
          }
        }
      })
  }

  return (
    <>
    <h1>회원가입</h1>
    <h6>가입하고 많은 혜택과 소식을 받아보세요!</h6>
    <div className='signupdiv'>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="username">
            아이디
          </label>
          <input type="text" id="username" name="username" value={username} placeholder='아이디를 입력하세요*' onChange={(e) => setUsername(e.target.value)} required />
          <label htmlFor="password">
            비밀번호
          </label>
          <input type="password" id="password" name="password" value={password} placeholder='비밀번호를 입력하세요*' onChange={(e) => setPassword(e.target.value)} required />
          
          
          <div className="error-message">
            {usernameError && <p>{usernameError}</p>}
            {nicknameError && <p>{nicknameError}</p>}
          </div>
          <div className='smalldiv'>
          <small>필독 : 아래의 글을 확인 후 회원가입을 진행하세요.</small>
          <br />
          <small>1. 이 사이트는 세계 공항 정보를 볼 수 있는 포털입니다.</small>
          <br />
          <small>2. 회원가입에 입력하신 정보들은 어느 누구에게도 공유하지 않습니다.</small>
          <br />
          <small>3. 사이트 규칙에 위반하는 행위를 한 경우 이용에 제한이 될 수 있습니다.</small>
          <br />
          <small>확인하셨다면 오른쪽의 체크박스를 체크하신 후 회원가입을 클릭하세요.</small>
          
          </div>
          <br/>

          <label htmlFor="agreement">
            <input type="checkbox" id="agreement" name="agreement" checked={agreementChecked} onChange={() => setAgreementChecked(!agreementChecked)} required />
            위 내용에 동의합니다.
          </label>
          <br />

          <button type="submit" className='bt1' disabled={isSubmitting}>회원가입</button>
          <button type="button" className='bt1' onClick={() => window.location.href = '/'}>메인화면</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignUp;