import React from 'react'
import image from '../image.jpeg';
import image2 from '../Composição do clube de pôquer com cartas caindo para frente e para trás _ Vetor Grátis_preview_rev_1.jpeg'
interface MyComponentProps {
  theme: string,
}
const Landingpage:React.FC<MyComponentProps> = ({theme})=>{
  return (
    <div className='flex gap-2 justify-between items-center h-screen px-28'>
    <div className='pl-4'>
      <p className='font-extrabold text-5xl'>Game On with ScoreShuffler</p>
      <h1 className='font-thin text-2xl pt-6'>Your All-in-One Scorekeeping Destination </h1>
      <p className='text-md text-zinc-500 pt-3'>ScoreShuffler simplifies scorekeeping for your games. Enter scores, stay  , and enjoy gaming like never before.</p>
      <div className='flex flex-row gap-1 text-center pt-2'><p className='text-md pt-2 text-zinc-500'>Don't have an account yet,</p><a className='underline decoration-solid text-xl cursor-pointer font-bold pt-1'>Sign Up</a></div>
    </div>
    {theme==="light" ? 
    <img src={image} alt='image' className='w-1/2 h-3/4'></img>
    :
    <img src={image2} alt='image' className='w-1/2 h-3/4'></img>
    }
    </div>
  )
}

export default Landingpage;
