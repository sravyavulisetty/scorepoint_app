import React, {useState} from 'react';
import '../App.css';
import logo from '../HD Wallpaper.jpeg';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
interface MyComponentProps {
  theme: string,
  toggleTheme:()=>void
}
const Header: React.FC<MyComponentProps> = ({theme, toggleTheme}) => {
  return (
    <nav className="h-30 font-roboto data-[theme=dark]:text-textcolor data-[theme=dark]:bg-bgcolor data-[theme=light]:bg-bgcolor data-[theme=light]:text-textcolor" data-theme={theme}>
      <div className='flex flex-row justify-between items-center mx-2'>
        <div>
          <img src={logo} alt='logo' className='w-14 h-14 rounded-full'></img>
        </div>
        <div className='flex justify-between items-center'>
            {theme === "dark" ?
            <div className='flex flex-row justify-center items-center cursor-pointer' onClick={toggleTheme}>
        <MdOutlineLightMode size={25}/><span className='pl-1'>Light</span>
            </div> :
            <div className='flex flex-row justify-center items-center cursor-pointer' onClick={toggleTheme}>
        <MdDarkMode size={25}/><span className='pl-1'>Dark</span>
            </div>}
            <button className='pl-10'>Login</button>
        </div>
      </div>
    </nav>
)
}

export default Header;
