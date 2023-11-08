import React, { useState } from 'react';
import './App.css';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const App: React.FC = ()=>{
  const [theme, setTheme] = useState("light");
  const handleTheme =()=>{
    setTheme((prev)=>prev === "light" ? "dark" : "light")
  }
  if(theme==="dark"){
    document.documentElement.setAttribute('data-theme', "dark");
    }
  if(theme === "light"){
    document.documentElement.setAttribute('data-theme', "light");
    }
  return (
    <div className="App">
      {theme === "dark" ?
      <div className='icon'>
        <MdOutlineLightMode size={25} onClick={handleTheme}/><span>Light</span>
      </div> :
      <div className='icon'>
        <MdDarkMode size={25} onClick={handleTheme}/><span>Dark</span>
      </div>}
      <div className="App-header">
        <h1>Welcome to ScorePoint</h1>
      </div>
    </div>
  );
}

export default App;
