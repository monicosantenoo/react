import React, { useRef,useEffect, useState } from 'react'

function Previous() {
    const [count , setcount] = useState(0);
    const use = useRef();

    useEffect(() => {
      use.current= count;
    },[count])
    

  return (
    <div>
   <p>now {count} previos count {use.current}</p>
   <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default Previous