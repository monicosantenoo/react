import React, { useEffect, useState } from 'react'

function Dupdate() {
    const [count, setcount]=useState(0);
    useEffect(()=>{
        document.title= `ciunt ${count}`;
    })
  return (
    <div>
        <button onClick={()=> setcount(count+1)} >push</button>
    </div>
  )
}

export default Dupdate