import React, { useState, useEffect } from 'react';

const Login = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const url = "http://localhost:8080/members";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response Error');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Fetch Error", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = data.find((user) => user.username === username && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      console.log('Login success');
    } else {
      console.log('Login Fail');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div className="grid">
          <label htmlFor="username">
            아이디
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label htmlFor="password">
            비밀번호
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">로그인</button>
        <button type="button" onClick={() => (window.location.href = '/signup')}>회원가입</button>
      </form>
    </div>
  );
}

export default Login;
