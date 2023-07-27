import airportlogo from '../img/airportlogo.png'
import Login from './Login';
import SignUp from './SignUp';
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
                <li><Link to='/login' role="button"><Login /></Link></li>
                <li><Link to='/signup' role="button"><SignUp /></Link></li>
            </ul>
        </nav>
    </header>
    );
}
export default Header