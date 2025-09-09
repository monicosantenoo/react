import React, { useEffect, useState } from 'react'

function Whenstatechng() {
    const [name,setname] = useState("");
    useEffect(()=>{
     console.log(name);
    },[name])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} placeholder='enter your name' />
    </div>
  )
}

export default Whenstatechng