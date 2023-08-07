import { useNavigate } from 'react-router-dom';
import airportlogo from '../img/airportlogo.png';
import style from '../Airport/Airport.module.css';
import DarkModeToggle from './DarkModeToggle';


const Header = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    alert('로그아웃되었습니다.');
    navigate('/');
  };  


  return (
    <header className="flex">
                  <nav>
                <ul>
                    <li><img className={style.airportlogo} src={airportlogo} alt="Airportlogo" /></li></ul>
                <ul>
                    <li><h1><strong>세계 공항 포털</strong></h1></li>
                </ul>
                <ul>
                    <>
                        <li><button onClick={handleLogout} className={style.bt1}>로그아웃</button></li>
                        <li><h5>OO님 환영합니다!</h5></li>
                    </>
                    <li><DarkModeToggle /></li>
                </ul>
            </nav>
    </header>
  );
};

export default Header;

