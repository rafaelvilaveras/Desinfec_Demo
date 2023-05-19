import React, { useState } from 'react';
import { MdOutlineCalendarMonth } from 'react-icons/md';

import '../css/App.css';
import '../css/content.css';

import Calendar from '../components/calendar';

const Schedule = ({tMonth, tYear}) => {

    const [date, setDate] = useState(tYear+'-'+tMonth);

    return ( 
        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <MdOutlineCalendarMonth/>
                <span>Agenda</span>
            </div>
            <div className='flex-row h-options'>
                <input 
                    className='h-options-content' 
                    type='month' 
                    min='2000-01' 
                    value={date} 
                    onChange={(e)=>{setDate(e.target.value)}}
                />
            </div>
            <Calendar
                month={date?.split('-')[1]}
                year={date?.split('-')[0]}
            />
        </div>
     );
}
 
export default Schedule;