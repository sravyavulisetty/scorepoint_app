import React from 'react';
import '../App.css';
import logo from '../WhatsApp Image 2023-11-14 at 5.16.32 PM.jpeg'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
interface MyComponentProps {
  theme: string,
  toggleTheme:()=>void
}
const Header: React.FC<MyComponentProps> = ({theme, toggleTheme}) => {
  return (
    <nav className="h-30 font-roboto data-[theme=dark]:text-textcolor data-[theme=dark]:bg-bgcolor data-[theme=light]:bg-bgcolor data-[theme=light]:text-textcolor px-24 pt-4" data-theme={theme}>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <img src={logo} alt='logo' className='w-14 h-14 rounded-full'></img>
          <span className='font-semibold text-2xl pl-2'>ScoreShuffler</span>
        </div>
        <div className='flex flex-row gap-8 items-center justify-center'>
            {theme === "dark" ?
            <div className='flex flex-row justify-center items-center cursor-pointer' onClick={toggleTheme}>
        <MdOutlineLightMode size={25}/><span>Light</span>
            </div> :
            <div className='flex flex-row justify-center items-center cursor-pointer' onClick={toggleTheme}>
        <MdDarkMode size={25}/><span>Dark</span>
            </div>}
            {theme==="light" ? 
            <button className='font-semibold text-lg cursor-pointer rounded-lg px-3 bg-green-200'>Login</button>
            :
            <button className='font-semibold text-lg cursor-pointer rounded-lg px-3 bg-red-200'>Login</button>
            }
        </div>
      </div>
    </nav>
)
}

export default Header;
