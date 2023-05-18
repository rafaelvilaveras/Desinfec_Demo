import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';
import '../css/content.css';
import ServicesD from './services';

const Calendar = ({month, year}) => {

    const monthList = ['01', '03', '05', '07', '08', '10', '12']

    function checkLeapYear() {
        if ((0 === year % 4) && ((0 !== year % 100) || (0 === year % 400))) {
            return 29;
        } else {
            return 28;
        }
    }

    function calcMaxDays() {
        if(month === '02') {
            return checkLeapYear();
        }else if(monthList.includes(month)) {
            return 31;

        }else{
            return 30;
        }
    }

    function calculateDayOfWeek(year, month) {
        // Adjust month and year for Zeller's Congruence
        if (month < 3) {
          month += 12;
          year--;
        }
      
        const q = 1; // First day of the month
        const K = year % 100;
        const J = Math.floor(year / 100);
      
        // Zeller's Congruence formula
        const h = (q + Math.floor((13 * (month + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
      
        // Mapping the result to the corresponding day of the week
        const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const dayOfWeek = daysOfWeek[h];

        switch (dayOfWeek) {
            case "Sunday":
                return 0;

            case "Monday":
                return 1;

            case "Tuesday":
                return 2;

            case "Wednesday":
                return 3;

            case "Thursday":
                return 4;

            case "Friday":
                return 5;

            case "Saturday":
                return 6;
        
            default:
                break;
        }
      }
      
    const dayOfWeek = calculateDayOfWeek(year, parseInt(month));

    function createDaysArr() {
        const aux = new Array(parseInt(calcMaxDays()) + dayOfWeek).fill(" ", 0, dayOfWeek);
      
        for (let index = dayOfWeek, count = 1; index < parseInt(calcMaxDays()) + dayOfWeek; index++, count++) {
          aux[index] = count;
        }
      
        return aux;
      }

    const calendarDays = createDaysArr();

    return ( 
        <div className='flex-row ca-container'>
            {/* <div className='flex-column ca-hours'>
                {new Array(13).fill(['', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']).map((time, key)=>{
                    return <span key={time[key]}>{time[key]}</span>
                })}
            </div> */}
            <div className='flex-column ca-content'>
                <div className='flex-row ca-header'>
                    {new Array(7).fill(['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']).map((data, key)=>{
                        return <span key={data[key]} className={7 !== key+1 ? 'ca-item' : ''}>{data[key]}</span>
                    })}
                </div>
                <div className='flex-row ca-content-wrapper'>
                    {calendarDays.map((day, key)=>{
                        return(
                            <div className='ca-item'>
                                <span key={'day'+key}>{day}</span>
                                {/* <ServicesD
                                    year={year}
                                    month={month}
                                    day={day}
                                /> */}
                            </div>
                        ); 
                    })}
                </div>
            </div>

        </div>
     );
}
 
export default Calendar