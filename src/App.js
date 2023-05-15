import { useState } from 'react';
import Greating from './components/greating';
import Navbar from './components/navbar';
import './css/App.css';
import Content from './components/content';

function App() {

  const [content, setContent] = useState(1);
  const logged = true;


  return (
    <>
      <Navbar
        type={1}
        logged={logged}
      />
      <div className=" flex-column App ">
        <Greating/>
        <div className=' flex-row App-content '>
          <Navbar
            type={2}
            setContent={setContent}
            logged={logged}
          />
          <Content
            index={content}
          />
        </div>
      </div>
    </>
  );
}

export default App;
