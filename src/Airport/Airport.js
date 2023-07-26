import {BrowserRouter, Routes, Route} from 'react-router-dom';
import style from './Airport.module.css';

import Header from './Header';



import Searchtool from './Searchtool';

import Notice from './Notice';
import Picture from './Picture';
import Top10Airport from './Top10Airport';
import RateCal from './RateCal';

import Siteinfo from './Siteinfo';
import Mapsearch from './Mapsearch';
import AirportInfo from './AirportInfo';
import Gallery from './Gallery';

const Airport = () => {
   
    return (
        <>  
            <BrowserRouter>
                <Header />
                <main>
                    
                        <nav>
                            <ul>
                                <li><a href="#" role="button"><Siteinfo /></a></li>
                                <li><a href="#" role="button"><Mapsearch /></a></li>
                                <li><a href="#" role="button"><AirportInfo /></a></li>
                                <li><a href="#" role="button"><Gallery /></a></li>
                            </ul>
                            <ul>
                                <li><input type="text" value='국가 또는 대륙 또는 공항코드를 입력하세요'/><Searchtool /></li>
                            </ul>
                        </nav>
                    
                    <section>
                    <div className='grid'>
                        <div><Notice /></div>
                        <div><Picture /></div>
                        <div className='flex'>
                            <div><Top10Airport /></div>
                            <div><RateCal /></div>
                        </div>
                    </div>
                    </section>
                </main>
            </BrowserRouter>
                <footer>
                    주소/이메일
                    copyright 2023, K-digital 3기 최호진, 손병희
                </footer>
        </>
    );
}
export default Airport;