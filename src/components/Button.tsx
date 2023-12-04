import React from 'react';
import '../App.css';
type  ButtonProps = {
  children: string | React.ReactNode,
  onClick : () => void,
  disabled: boolean
}
const Button = ({children, onClick, disabled}:ButtonProps)=> {
  return (
   <button onClick={onClick} disabled={disabled} className='p-2 border border-green-500 rounded-full px-2'>{children}</button>
  )
}
export default Button;

