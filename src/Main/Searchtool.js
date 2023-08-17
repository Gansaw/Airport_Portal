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
        <form onSubmit={handleSubmit} method='get' className={style.rt}>
            <fieldset className={style.fieldset}>
                <input 
                    type="search" 
                    className={style.searchtool} 
                    id='search' 
                    placeholder='국가 또는 대륙 또는 공항코드를 입력하세요' 
                    value={searchValue} 
                    onChange={handleSearchChange}
                />
                <button type="submit" className={style.searchbt}>검색</button>
            </fieldset>
        </form>  
    )
}
export default Searchtool;