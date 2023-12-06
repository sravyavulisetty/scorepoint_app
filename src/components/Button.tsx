import React from 'react';
import '../App.css';
type  ButtonProps = {
  children: string | React.ReactNode,
  onClick : () => void,
  disabled: boolean,
  color: string,
  borderRadius: number
}
const Button = ({children, onClick, disabled, color, borderRadius}:ButtonProps)=> {
  return (
   <button onClick={onClick} disabled={disabled} className='p-1.5 border mt-2 cursor-pointer' style={{borderColor: color, borderRadius: borderRadius}}>{children}</button>
  )
}
export default Button;

