import airportlogo from '../img/airportlogo.png'
import style from './Airport.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className="flex">
        <nav>
            <ul>
                <li><img className={style.airportlogo} src={airportlogo} alt="Airportlogo" /></li>
            </ul>
            <ul>
                <li><h1><strong>세계 공항 포털</strong></h1></li>
            </ul>
            <ul>
                <li><Link to='/login' className={style.bt1} role="button">로그인</Link></li>
                <li><Link to='/signup' className={style.bt1} role="button">회원가입</Link></li>
            </ul>
        </nav>
    </header>
    );
}
export default Header