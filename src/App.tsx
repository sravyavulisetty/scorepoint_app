import { useContext, useEffect} from 'react';
import './App.css';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {ThemeContext} from './Contexts/ThemeContext';
import ThemeProvider from './Contexts/ThemeContext';
const App:React.FC =() => {
  useEffect(()=>{
    console.log(theme);
  })
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme}>
      {theme === "dark" ?
      <div className='icon' onClick={(e: React.MouseEvent<HTMLDivElement>) =>toggleTheme(e)}>
        <MdOutlineLightMode size={25}/><span>Light</span>
      </div> :
      <div className='icon' onClick={(e:React.MouseEvent<HTMLDivElement>) =>toggleTheme(e)}>
        <MdDarkMode size={25}/><span>Dark</span>
      </div>}
      <div className="App-header">
        <h1>Welcome to ScorePoint</h1>
      </div>
    </div>
  );
}

export default App;
