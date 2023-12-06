import React from 'react'
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Input = () => {
  return (
    <>
    <input list="score" name="score" className='relative hover:absolute shadow-md'/>
    <div className='hidden group-hover:block'>
        <MdEdit/><RxCross2/>
    </div>
    <datalist id="score">
    <option value="drop"></option>
    <option value="middle drop"></option>
    <option value="full score"></option>
    </datalist>
</>
  )
}

export default Input
