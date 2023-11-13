import React, { useState } from 'react';
import './App.css';
import './index.css';
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
    <div className="flex justify-center items-center relative text-center font-roboto data-[theme=dark]:text-textcolor data-[theme=dark]:bg-bgcolor data-[theme=light]:bg-bgcolor data-[theme=light]:text-textcolor" data-theme={theme}>
      {theme === "dark" ?
      <div className='absolute top-0 right-6 flex flex-row justify-center items-center' onClick={toggleTheme}>
        <MdOutlineLightMode size={25}/><span className='p-2'>Light</span>
      </div> :
      <div className='absolute top-0 right-6 flex flex-row justify-center items-center' onClick={toggleTheme}>
        <MdDarkMode size={25}/><span className='p-2'>Dark</span>
      </div>}
      <div className="flex flex-col min-h-screen justify-center items-center font-roboto">
        <h1 className='text-3xl font-extrabold'>Welcome to ScorePoint</h1>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
