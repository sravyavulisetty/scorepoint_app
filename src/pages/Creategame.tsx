import React, { useEffect, useState } from 'react';
import Stepper from '../components/Stepper';
import Tile from '../components/Tile';
import Toaster from '../components/Toaster';
import Button from '../components/Button';
interface playerProps{
  id: number,
  name: string
}
const ChooseScoreElement =()=>{
  const [scorepoints, setScorepoints] =useState(0);
  useEffect(()=>{
    localStorage.setItem("totalScoreLimit",JSON.stringify(scorepoints));
  },[scorepoints])
  return (
      <form className='flex flex-col items-center'>
        <label htmlFor='scorepoints'>Enter Score Points</label>
        <input type='number' id='scorepoints' value={scorepoints} className='mt-2 p-1 border rounded-md' onChange={(e: any)=>setScorepoints(e.target.value)}></input>
      </form>
  )
}
const AddPlayersElement =()=>{
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [toastify, setToastify] = useState(false);
  const [players, setPlayers] = useState<playerProps[]>([])
  const [editingPlayer, setEditingPlayer] = useState<playerProps | null>();
  useEffect(()=>{
    localStorage.setItem("players",JSON.stringify(players));
    localStorage.setItem("gameId", JSON.stringify(1));
    localStorage.setItem("gameName","Rummy");
  },[players])
  const addPlayers =()=>{
    if(editingPlayer){
      if(name===""){
        setToastify(true);
      }
        setPlayers((prev) =>
          prev.map((player) => (player.id === editingPlayer.id ? { ...player, name: name } : player))
        );
      setEditingPlayer(null);
    }
    else{
      if(name===""){
        setToastify(true);
      }
    else{
      setToastify(false);
      setPlayers((prev)=>[...prev,{id: id, name: name}]);
      setName("");
    }
  }
}
  const handleChange =(e: any)=>{
    e.preventDefault();
    setName(e.target.value)
    setId((prev) => prev+1)
  }
  const deletePlayers = (id: number) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };
  const editPlayer=(id:number)=>{
    const playerToEdit = players.find((player) => player.id === id);
    if(playerToEdit){
    setName(playerToEdit.name);
    setEditingPlayer(playerToEdit);
    }
  }
  return (
    <div className='flex flex-col items-center'>
      {toastify && <Toaster>Please enter a valid name</Toaster>}
    <form className='flex flex-col items-center' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor='name'>Enter Player Name</label>
      <input type='text' id='name' className='mt-1 p-1 border rounded-md' value={name} onChange={(e)=>{handleChange(e)}}></input>
      <Button onClick={addPlayers} disabled={false} color={'indigo'} borderRadius={6}>Add</Button>
    </form>
    <div className='mt-6'>
      {players?.map((player)=>(
        <div key={player.id}>
          <Tile  player={player} onDelete={() => deletePlayers(player.id)} onEdit={()=>editPlayer(player.id)}/>
        </div>
    ))}
    </div>
    </div>
  )
}
const Creategame = () => {
  return (
    <><Stepper steps={[{ title: "Choose your game score", element: <ChooseScoreElement /> }, { title: "Add Players", element: <AddPlayersElement /> }]}/></>
  )
}

export default Creategame;
