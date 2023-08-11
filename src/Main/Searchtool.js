import style from '../Airport/Airport.module.css';
import './Maincss.css';
import React,{useState} from 'react';

const Searchtool = () =>{
    const [searchValue, setSearchValue] = useState('');    
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/mapsearch?search=${encodeURIComponent(searchValue)}`;
    };

    
    return(
        <>
            <div className={style.rt}>
                <form className={style.form} onSubmit={handleSubmit} method='get'>
                    <fieldset className={style.fieldset}>
                        <div className={style.searchdiv1}>
                            <input type="search" className={style.searchtool} id='search' placeholder='국가 또는 대륙 또는 공항코드를 입력하세요' value={searchValue} onChange={handleSearchChange}/>
                        </div>
                        <div className={style.searchdiv2}>
                            <button type="submit" className={style.searchbt} value='검색'>검색</button>
                        </div>
                    </fieldset>
                </form>     
            </div>
        </>
    )
}
export default Searchtool;