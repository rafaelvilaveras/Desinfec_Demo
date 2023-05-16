import React from 'react';
import { MdOutlineCalendarMonth } from 'react-icons/md';

import '../css/App.css';
import '../css/content.css';

const Schedule = () => {
    return ( 
        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <MdOutlineCalendarMonth/>
                <span>Agenda</span>
            </div>
            <div className='flex-column'>
              
            </div>
        </div>
     );
}
 
export default Schedule;