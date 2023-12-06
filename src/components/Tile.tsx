import React from 'react'
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
type playerProps={
    player:{
        name:string
    },
    onDelete: ()=> void,
    onEdit: ()=>void
}
const Tile = ({player, onDelete, onEdit}:playerProps) => {
  return (
    <div className='border rounded-lg flex flex-row justify-between items-center p-2 mt-1 w-max'>
      <h2>{player.name}</h2>
      <div className='flex pl-10'>
        <MdEdit size={20} onClick={onEdit}/>
        <RxCross2 size={20} onClick={onDelete} className='cursor-pointer ml-2'/>
      </div>
    </div>
  )
}

export default Tile
