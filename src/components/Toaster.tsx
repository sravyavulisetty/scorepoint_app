import React from 'react'
interface ToasterProps{
    children: React.ReactNode
}
const Toaster:React.FC<ToasterProps> = ({children}) => {
  return (
    <div className='absolute right-10 top-20 bg-red-600 h-10 rounded-lg w-auto p-2'>
        {children}
    </div>
  )
}

export default Toaster
