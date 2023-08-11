import Picture from './Picture';
import Top10Airport from './Top10Airport';
import RateCal from './RateCal';
import style from '../Airport/Airport.module.css';
import Searchtool from './Searchtool';
import './Maincss.css';


const Main = () =>{
    
    
    return(
        <>
        <main>
            <Searchtool />
            <div className='grid'>
                <article><div><Picture /></div></article>
                <div className='flex'>
                <article><div className={style.rate}><RateCal /></div></article>
                <article><div><Top10Airport /></div></article>
                </div>
            </div>
        </main>
           
        </>
    );
}
export default Main