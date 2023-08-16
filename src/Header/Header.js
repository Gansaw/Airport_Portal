import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import style from '../Airport/Airport.module.css';
import { useAuth } from '../Authorization';

const Header = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="flex">
            <nav>
                <ul>
                    <li><Link to="/siteinfo" className={style.bt2}>사이트정보</Link></li>
                    <li><Link to="/mapsearch" className={style.bt2}>지도정보</Link></li>
                    <li><Link to="/airportInfo" className={style.bt2}>공항정보</Link></li>
                    <li><Link to="/notice" className={style.bt2}>공지사항</Link></li>
                    <li><Link to="/gallery" className={style.bt2}>갤러리</Link></li>
                </ul>

                <ul>
                    <li><h1><strong><Link to = "/">세계 공항 포털</Link></strong></h1></li>
                </ul>

                <ul>
                    {isLoggedIn ? (
                        <>
                            <li><button onClick={logout} className={style.bt1}>로그아웃</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login" className={style.bt2}>로그인</Link></li>
                            <li><Link to="/signup" className={style.bt2}>회원가입</Link></li>
                        </>
                    )}
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
