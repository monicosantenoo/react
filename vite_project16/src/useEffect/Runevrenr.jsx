import React, { useEffect, useState } from 'react'

function Runevrenr() {
   const [one,setone] = useState(0);
   useEffect(()=>{
    console.log("runs only when component mount ");
   })
  return (
    <div>
        <h1>{one}</h1>
        <button onClick={()=>setone(one+1)} >+</button>
    </div>
  )
}

export default Runevrenr