import React from 'react'
type playerProps = {
    player:{
        name:string,
        totalscore: number
    }
}
const Card = ({player}: playerProps) => {
  return (
    <div className='border rounded-xl p-4 flex flex-col items-center'>
        <h3>{player.name}</h3>
        <h1>{player.totalscore}</h1>
    </div>
  )
}

export default Card;
