import {Link} from 'react-router-dom';
import Notice from './Notice';
import Picture from './Picture';
import Top10Airport from './Top10Airport';
import RateCal from './RateCal';

import Siteinfo from './Siteinfo';
import Mapsearch from './Mapsearch';
import AirportInfo from './AirportInfo';
import Gallery from './Gallery';
import Searchtool from './Searchtool';

const Main = () =>{

    return(
        <>
        <main>
            
                <div className='rt'>
                    <nav>
                        <ul>
                            <li><Link to='/siteinfo' role="button"><Siteinfo /></Link></li>
                            <li><Link to='/mapsearch' role="button"><Mapsearch /></Link></li>
                            <li><Link to='/airportinfo' role="button"><AirportInfo /></Link></li>
                            <li><Link to='/gallery' role="button"><Gallery /></Link></li>
                        </ul>
                    </nav>
                </div>
           
                        <nav>
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
           
        </>
    );
}
export default Main