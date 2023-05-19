import { useState } from 'react';

import Navbar from '../components/navbar';
import Content from '../components/content';
import Greating from '../components/greating';

import '../css/App.css';

const Hub = () => {
  
    const [content, setContent] = useState(1);

    return ( 
        <>
            
            <Greating/>
            
            <div className=' flex-row App-content '>


                <Navbar
                type={2}
                setContent={setContent}
                />

                <Content
                index={content}
                />
                
            </div>
            
        </>
     );
}
 
export default Hub;