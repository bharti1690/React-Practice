import logo from './logo.svg';
import './App.css';
import { SearchInput } from './search-input/search-input';
import { useState } from 'react';
import Slider from './image-slider/slider';
import Nav from 'react-bootstrap/Nav';

function App() {

  const [isPreviewShown,setIsPreviewShown] = useState(false)
  const [isSlider,setIsSlider] = useState(false)

  const handleButton =(e)=>{
    e.preventDefault();

     if(isPreviewShown)
        setIsPreviewShown(false)
     else 
        setIsPreviewShown(true) ;
  }

  const handleSliderButton =(e)=>{
    e.preventDefault();

     if(isSlider)
     setIsSlider(false)
     else 
     setIsSlider(true) ;
  }

  return (
    <div className="App">

      <header className="App-header">
  
      <div className='col-md-12'>
           
           <div className='col-md-6'><button type="submit" onClick={handleButton}>SearchInput</button>
           {isPreviewShown && <SearchInput/>}</div>
           <div className='col-md-6'><button type="submit" onClick={handleSliderButton}>Slider</button>
           {isSlider && <Slider/>}</div> 
         </div>
         {(!isSlider && !isPreviewShown) && <><img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>  and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a></> }
        
        <br></br>
      
       
      </header>
    </div>
  );
}

export default App;
