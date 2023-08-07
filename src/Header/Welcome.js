const Welcome = () => {

    return(
        <div>
            <h2>회원가입이 완료되었습니다.</h2>
            <button type="button" onClick={() => (window.location.href = '/')}>메인화면</button>
            <button type="button" onClick={() => (window.location.href = '/login')}>로그인</button>
        </div>
    )
}

export default Welcome