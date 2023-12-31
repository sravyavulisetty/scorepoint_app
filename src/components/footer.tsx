import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className='flex flex-row items-center p-4 text-sm m-0 font-light'>
      <p>&copy; Copyright 2023 ScoreShuffler.com</p>
      <div className='pl-10'>
        <Link to={'/'}>Home</Link>
        <span className='pl-1'><a href='/privacy'>| Privacy Policy</a></span>
      </div>
    </div>
  )
}

export default Footer;
