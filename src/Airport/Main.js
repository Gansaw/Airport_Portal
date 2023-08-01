import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Notice from './Notice';
import Picture from './Picture';
import Top10Airport from './Top10Airport';
import RateCal from './RateCal';
import style from './Airport.module.css';
import Siteinfo from './Siteinfo';
import Mapsearch from './Mapsearch';
import AirportInfo from './AirportInfo';
import Gallery from './Gallery';
import Searchtool from './Searchtool';


const Main = () =>{
    const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/airportinfo?search=${encodeURIComponent(searchValue)}`;
    };

    return(
        <>
        <main>
            
                <div className='rt'>
                    <nav>
                        <ul>
                            <li><Link to='/siteinfo' className={style.bt2} role="button"><Siteinfo /></Link></li>
                            <li><Link to='/mapsearch' className={style.bt2} role="button"><Mapsearch /></Link></li>
                            <li><Link to='/airportinfo' className={style.bt2} role="button"><AirportInfo /></Link></li>
                            <li><Link to='/gallery' className={style.bt2} role="button"><Gallery /></Link></li>
                        </ul>
                    </nav>
                    
                    <form className={style.form} onSubmit={handleSubmit} method='get'>
                        <fieldset>
                            <label for='search'>공항 검색하기</label>
                            <input type="search" id='search' placeholder='국가 또는 대륙 또는 공항코드를 입력하세요' value={searchValue} onChange={handleSearchChange}/><Searchtool />
                            <button type="submit" value='검색'>검색</button>
                            <button type="reset" value='초기화'>초기화</button>
                        </fieldset>
                    </form>     
                    
                </div>
                    
                    <div className='grid'>
                        <article><div><Notice /></div></article>
                        <article><div><Picture /></div></article>
                        <div className='flex'>
                            <article><div><Top10Airport /></div></article>
                            <article><div><RateCal /></div></article>
                        </div>
                    </div>
                    
                </main>
           
        </>
    );
}
export default Main