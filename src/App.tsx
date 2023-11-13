import React, { useState } from 'react';
import './App.css';
import './index.css';
import { ThemeContext } from './Contexts/ThemeContext';
import Header from './components/header';
import Footer from './components/footer';
const App: React.FC = ()=>{
  const [theme, setTheme] = useState("light");
  const toggleTheme =()=>{
    setTheme((prev)=>prev === "light" ? "dark" : "light")
  }
    return (
      <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="flex flex-col font-roboto data-[theme=dark]:text-textcolor data-[theme=dark]:bg-bgcolor data-[theme=light]:bg-bgcolor data-[theme=light]:text-textcolor" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <div className="flex min-h-screen justify-center items-center">
        <h1 className='text-3xl font-extrabold'>Welcome to ScorePoint</h1>
      </div>
      <Footer/>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
