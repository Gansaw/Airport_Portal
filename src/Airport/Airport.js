import Mapsearch from './Mapsearch';
import airportlogo from '../img/airportlogo.png'


const Airport = () => {
   
    return (
        <>  
            <header className="flex">
                <nav>
                    <ul>
                        <li><img className='airportlogo' src={airportlogo} alt="Airportlogo" /></li>
                    </ul>
                    <ul>
                        <li><strong>세계 공항 포털</strong></li>
                    </ul>
                    <ul>
                        <li><h3>로그인</h3></li>
                        <li><h3>회원가입</h3></li>
                    </ul>
                </nav>
            </header>
            <body>
                <nav>
                    <ul>
                        <li>사이트 정보</li>
                        <li>지도api</li>
                        <li>공항 정보</li>
                        <li>자유 게시판</li>
                    </ul>
                    <ul>
                        <input type="text" />
                    </ul>
                </nav>
            </body>
        </>
    );
}
export default Airport;