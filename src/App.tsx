import React, {useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './Contexts/ThemeContext';
import Header from './components/header';
import Footer from './components/footer';
import Landingpage from './pages/landing-page';
import Signup from './pages/signup';
import Login from './pages/login';
import Stepper from './components/Stepper';
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
      <div className="h-screen font-poppins flex flex-col text-textcolor bg-bgcolor" data-theme={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
          <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/stepper' element={<Stepper steps={[
              {
              title: "Choose your game score"
            },
            {title: "Add Players"}]}/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        <Footer/>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
