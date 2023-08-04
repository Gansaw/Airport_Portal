import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Notice from './Notice';
import Picture from './Picture';
import Top10Airport from './Top10Airport';
import RateCal from './RateCal';
import style from './Airport.module.css';
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
            
                <div className={style.rt}>
                    <nav>
                        <ul>
                            <li><Link to='/siteinfo' className={style.bt2} role="button">사이트정보</Link></li>
                            <li><Link to='/mapsearch' className={style.bt2} role="button">지도정보</Link></li>
                            <li><Link to='/airportinfo' className={style.bt2} role="button">공항정보</Link></li>
                            <li><Link to='/gallery' className={style.bt2} role="button">갤러리</Link></li>
                        </ul>
                    </nav>
                    
                    <form className={style.form} onSubmit={handleSubmit} method='get'>
                        <fieldset className={style.fieldset}>
                            <div className={style.searchdiv1}>
                                <input type="search" className={style.searchtool} id='search' placeholder='국가 또는 대륙 또는 공항코드를 입력하세요' value={searchValue} onChange={handleSearchChange}/><Searchtool />
                            </div>
                            <div className={style.searchdiv2}>
                                <button type="submit" className={style.searchbt} value='검색'>검색</button>
                            </div>
                        </fieldset>
                    </form>     
                    
                </div>
                    
                    <div className='grid'>
                        <article><div><Notice /></div></article>
                        <article><div><Picture /></div></article>
                        <div className='flex'>
                            <article><div><Top10Airport /></div></article>
                            <article><div className={style.rate}><RateCal /></div></article>
                        </div>
                    </div>
                    
                </main>
           
        </>
    );
}
export default Main