import React, { useState } from 'react';
import './darkmode.css';
import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';
const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    return (
    <fieldset>
        <label htmlFor="switch">
            <input 
            type="checkbox" 
            id="switch" 
            name="switch" 
            role="switch" 
            checked={isDarkMode}
            onChange={toggleDarkMode}
            />
            {isDarkMode ? <BsFillMoonFill size='24' color='yellow'/> :
             <BsFillSunFill size='24' color='yellow'/>}
        </label>
    </fieldset>
    );
};

export default DarkModeToggle;