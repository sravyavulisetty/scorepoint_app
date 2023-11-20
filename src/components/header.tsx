import React from 'react';
import '../App.css';
import logo from '../WhatsApp Image 2023-11-14 at 5.16.32 PM.jpeg'
import { MdLightMode } from "react-icons/md";
import { IoToggle } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
interface MyComponentProps {
  theme: string,
  toggleTheme:()=>void
}
const Header: React.FC<MyComponentProps> = ({theme, toggleTheme}) => {
  return (
    <nav className="h-30 data-[theme=dark]:text-textcolor data-[theme=dark]:bg-bgcolor data-[theme=light]:bg-bgcolor data-[theme=light]:text-textcolor pl-16 py-4" data-theme={theme}>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <img src={logo} alt='logo' className='w-10 h-10 rounded-full'></img>
          <span className='font-poppins font-normal text-2xl pl-1'>ScoreShuffler</span>
        </div>
        <div className='flex flex-row gap-8 items-center justify-center pr-4'>
          <div className='flex flex-row gap-1 items-center'>
            <IoToggle size={35} onClick={toggleTheme} className='cursor-pointer'/>
            {theme==="dark" ? 
            <MdLightMode size={23}/>
            :
            <IoIosMoon size={23}/>}
          </div>
            <button className='text-md font-normal cursor-pointer px-4 py-1 inline-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded transition duration-500 hover:scale-110'>Login</button>
        </div>
      </div>
    </nav>
)
}

export default Header;
