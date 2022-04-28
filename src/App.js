import logo from './logo.svg';
import './App.css';
import { SearchInput } from './search-input';
import { useState } from 'react';

function App() {

  const [isPreviewShown,setIsPreviewShown] = useState(false)

  const handleButton =(e)=>{
    e.preventDefault();

     if(isPreviewShown)
        setIsPreviewShown(false)
     else 
        setIsPreviewShown(true) ;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <br></br>
        <button type="submit" onClick={handleButton}>SearchInput</button>
        {isPreviewShown && <SearchInput/>}
       
      </header>
    </div>
  );
}

export default App;
