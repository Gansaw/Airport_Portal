import Mapsearch from './Mapsearch';
import airportlogo from '../img/airportlogo.png'
import Searchtool from './Searchtool';
import Notice from './Notice';
import Picture from './Picture';


const Airport = () => {
   
    return (
        <>  
            <header className="flex">
                <nav>
                    <ul>
                        <li><img className='airportlogo' src={airportlogo} alt="Airportlogo" /></li>
                    </ul>
                    <ul>
                        <li><h1><strong>세계 공항 포털</strong></h1></li>
                    </ul>
                    <ul>
                        <li><h6>로그인</h6></li>
                        <li><h6>회원가입</h6></li>
                    </ul>
                </nav>
            </header>
            <main>
                <nav>
                    <ul>
                        <li><a href="#" role="button">사이트 정보</a></li>
                        <li><a href="#" role="button">지도api</a></li>
                        <li><a href="#" role="button">공항 정보</a></li>
                        <li><a href="#" role="button">갤러리</a></li>
                    </ul>
                    <ul>
                        <li><input type="text" value='국가 또는 대륙 또는 공항코드를 입력하세요'/></li>
                    </ul>
                </nav>
                <section>
                <div className='grid'>
                    <div>{Notice}</div>
                    <div>{Picture}</div>
                    <div className='flex'>
                        <div>Top10 Airport</div>
                        <div>ratecal</div>
                    </div>
                </div>
                </section>
            </main>
            <footer>
                주소/이메일
                copyright 2023, K-digital 3기 최호진, 손병희
            </footer>
        </>
    );
}
export default Airport;