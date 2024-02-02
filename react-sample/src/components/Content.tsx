import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className='content' style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark? 'white' : 'black',
        }}
        >
            <p> 좋은하루 되어라</p>
        </div>
    );
}

export default Content;