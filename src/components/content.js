import React from 'react';

import '../css/App.css';
import '../css/content.css';

import Home from '../pages/home';
import Schedule from '../pages/schedule';
import Scheduling from '../pages/scheduling';

const Content = ({index}) => {
    return ( 
        <div className='c-container'>
            <div className={index === 1 ? ' c-content ' : ' display-none '}>
                <Home/>
            </div>
            <div className={index === 2 ? ' c-content ' : ' display-none '}>
                <Schedule/>
            </div>
            <div className={index === 3 ? ' c-content ' : ' display-none '}>
                <Scheduling/>
            </div>
            <div className={index === 4 ? ' c-content ' : ' display-none '}>
                <span>Não existe</span>
            </div>
        
        </div>
     );
}
 
export default Content;