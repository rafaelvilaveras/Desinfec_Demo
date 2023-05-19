import React from 'react';
import axios from 'axios';
import logo from '../img/Logo.png';

import { FiFile } from 'react-icons/fi';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { GrDocumentConfig } from 'react-icons/gr';
import { BiSpreadsheet } from 'react-icons/bi';

import '../css/App.css';
import '../css/navbar.css';

const Navbar = ({type, setContent, logged, setLogged}) => {

    

    return ( 
        <>
        {/* Navbar 1 */}
            <div className={((logged)&&(type === 1)) ? ' flex-row n1-container ' : 'display-none'}>
                <div className=' flex-row n1-content'>
                    <div className='n1-img-container'>
                        <img alt='Desinfec logo' src={logo}/>
                    </div>

                    <button className='n1-button' onClick={()=>{setLogged(false)}}>Sair</button>

                </div>
            </div>
        {/* Navbar 2 */}
            <div className={((type === 2)) ? ' flex-column n2-container ' : 'display-none'}>
                <button className='n2-button' onClick={()=>{setContent(1)}}><FiFile/></button>
                <button className='n2-button' onClick={()=>{setContent(2)}}><MdOutlineCalendarMonth/></button>
                <button className='n2-button' onClick={()=>{setContent(3)}}><GrDocumentConfig/></button>
                <button className='n2-button' onClick={()=>{setContent(4)}}><BiSpreadsheet/></button>
                <button className='n2-button' onClick={()=>{setContent(5)}}><BiSpreadsheet/></button>
                <button className='n2-button' onClick={()=>{setContent(6)}}><BiSpreadsheet/></button>
                <button className='n2-button' onClick={()=>{setContent(7)}}><BiSpreadsheet/></button>

            </div>
        </>
     );
}
 
export default Navbar;