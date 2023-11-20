import React, {useState,useEffect } from 'react';
import './App.css';
import './index.css';
import { ThemeContext } from './Contexts/ThemeContext';
import Header from './components/header';
import Footer from './components/footer';
import Landingpage from './components/landing-page';
const App: React.FC = ()=>{
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

    return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="h-screen flex flex-col data-[theme=dark]:text-textcolor data-[theme=dark]:bg-bgcolor data-[theme=light]:bg-bgcolor data-[theme=light]:text-textcolor" data-theme={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Landingpage theme={theme}/>
        <Footer theme={theme}/>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
