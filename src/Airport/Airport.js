import Header from './Header';
import Main from './Main';
import './Footer.css';

const Airport = () => {
    
    return (
        <>  
                <Header />
                <Main />
                <footer>
                    <div className='info'>
                    K-digital 3기 Mini Project<br/>
                    copyright 2023, 최호진, 손병희
                    </div>
                </footer>
        </>
    );
}
export default Airport;