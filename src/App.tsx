import React, { useState } from 'react';
import './App.css';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from './Contexts/ThemeContext';
const App: React.FC = ()=>{
  const [theme, setTheme] = useState("light");
  const toggleTheme =()=>{
    setTheme((prev)=>prev === "light" ? "dark" : "light")
  }
    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" data-theme={theme}>
      {theme === "dark" ?
      <div className='icon' onClick={toggleTheme}>
        <MdOutlineLightMode size={25}/><span>Light</span>
      </div> :
      <div className='icon' onClick={toggleTheme}>
        <MdDarkMode size={25}/><span>Dark</span>
      </div>}
      <div className="App-header">
        <h1>Welcome to ScorePoint</h1>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
