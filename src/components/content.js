import React from 'react';

import '../css/App.css';
import '../css/content.css';

import Home from '../pages/home';
import Schedule from '../pages/schedule';
import Scheduling from '../pages/scheduling';

const Content = ({index}) => {
    return ( 
        <div>
            <div className={index === 1 || ' display-none '}>
                <Home/>
            </div>
            <div className={index === 2 || ' display-none '}>
                <Schedule/>
            </div>
            <div className={index === 3 || ' display-none '}>
                <Scheduling/>
            </div>
            <div className={index === 4 || ' display-none '}>
                <span>Não existe</span>
            </div>
        
        </div>
     );
}
 
export default Content;