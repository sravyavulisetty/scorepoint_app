import React, { useState, CSSProperties } from 'react';
import './App.css';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const App: React.FC = ()=>{
  const [theme, setTheme] = useState("light");
  const handleTheme =()=>{
    setTheme((prev)=>(prev === "light" ? "dark" : "light"))
  }
  const rootStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? 'var(--bg-light)' : 'var(--bg-dark)',
    color: theme === 'light' ? 'var(--color-light)' : 'var(--color-dark)',
  };  
  return (
    <div className="App" style={rootStyle}>
      {theme === "dark" ?
      <div className='icon'>
        <MdOutlineLightMode size={25} onClick={handleTheme}/><span>Light</span>
      </div> :
      <div className='icon'>
        <MdDarkMode size={25} onClick={handleTheme}/><span>Dark</span>
      </div>}
      <header className="App-header" style={rootStyle}>
        <h1>Welcome to ScorePoint</h1>
      </header>
    </div>
  );
}

export default App;
