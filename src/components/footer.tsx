import React from 'react'
const Footer = () => {
  return (
    <div className='bg-gray-300 flex flex-row items-center p-2'>
      <p>&copy; Copyright 2023 ScorePoint.com</p>
      <div className='pl-10'>
        <a href='/home'>Home</a>
        <span className='pl-1'><a href='/privacy'>| Privacy Policy</a></span>
      </div>
    </div>
  )
}

export default Footer;
