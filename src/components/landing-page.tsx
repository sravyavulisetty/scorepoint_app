import React from 'react';
import 'animate.css';
import image from '../selective-focus-shot-four-aces-wooden-table.jpg';
interface MyComponentProps {
  theme: string,
}
const Landingpage:React.FC<MyComponentProps> = ({theme})=>{
  return (
    <div className='flex gap-2 justify-between items-center h-full font-poppins' data-theme={theme}>
    <div className='pl-16'>
      <h1 className="font-semibold text-7xl">Ace Your Game Scores</h1>
      <h1 className='font-extralight text-2xl pt-6 font-poppins bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text'>Your Ultimate Scorekeeping Hub</h1>
      <p className='pt-4 text-xs leading-5 font-light font-poppins w-3/4'>We simplify gaming with effortless scorekeeping, ensuring a smooth and enjoyable experience for every player. Dive into the world of ScoreShuffler, where design and development converge for the ultimate gaming solution.</p>
      <div className='flex flex-row gap-1 items-center text-center pt-2 font-poppins font-light'><p className='pt-2 text-sm'>Don't have an account yet,  </p><button className='text-md font-normal rounded px-3 mt-2 ml-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 transition duration-500 hover:scale-110'>Sign Up</button></div>
    </div>
    <img src={image} alt='rummy' className='pr-2 w-1/2 h-3/4'></img>
    </div>
  )
}
export default Landingpage;
