import React from 'react'
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
type playerProps={
    player:{
        name:string
    }
}
const Tile = ({player}:playerProps) => {
  return (
    <div className='border rounded-lg flex flex-row justify-between items-center p-2 mt-10 w-max'>
      <h2>{player.name}</h2>
      <div className='flex pl-10'><MdEdit size={20}/><RxCross2 size={20}/></div>
    </div>
  )
}

export default Tile
