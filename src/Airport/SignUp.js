import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>    
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="username">
            아이디
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br />            
          </label>
          <label htmlFor="password">
            비밀번호
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />
          </label>
          <label htmlFor="nickname">
            닉네임
            <input type="text" id="nickname" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
            <br />
          </label>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="예시: abc@abc.com" required />
          <br />
          <br />

          <small>필독 : 아래의 글을 확인 후 회원가입을 진행하세요.</small>
          <br />
          <small>1. 이 사이트는 세계 공항 정보를 볼 수 있는 포털입니다.</small>
          <br />
          <small>2. 회원가입에 입력하신 정보들은 어느 누구에게도 공유하지 않습니다.</small>
          <br />
          <small>3. 사이트 규칙에 위반하는 행위를 한 경우 이용에 제한이 될 수 있습니다.</small>
          <br />
          <small>확인하셨다면 오른쪽의 체크박스를 체크하신 후 회원가입을 클릭하세요.</small>
          <br />
          <br />

          <label htmlFor="agreement">
            <input type="checkbox" id="agreement" name="agreement" checked={agreementChecked} onChange={() => setAgreementChecked(!agreementChecked)} required />
            위 내용에 동의합니다.
          </label>

          <button type="submit">회원가입</button>
          <button type="button" onClick={() => window.location.href = '/home'}>메인화면</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;