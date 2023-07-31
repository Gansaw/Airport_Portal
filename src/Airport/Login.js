import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>로그인</h1>
            <form action="/login" method="post">
                <div className="grid">
                    <label htmlFor="username">
                        아이디
                        <input type="text" id="username" name="username" />
                    </label>
                    <label htmlFor="password">
                        비밀번호
                        <input type="password" id="password" name="password" />
                    </label>
                </div>
                <button type="submit">로그인</button>
                <button type="button" onClick={() => (window.location.href = '/signup')}>회원가입</button>
            </form>
        </div>
    );
}

export default Login;
