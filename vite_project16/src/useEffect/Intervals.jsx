import React, { useEffect, useState } from 'react'

function Intervals() {
    const [count , setcount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=> setcount( count+1),1000);
        return clearInterval(timer)
    },[])
  return (
    <div>
            <h2>hello {count}</h2>
    </div>
  )
}

export default Intervals