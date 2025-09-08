import React, { useState } from 'react'

function Funcone() {
const [message ,setmessage] = useState("hello world");

  return (
    <div>
     <h1>{message}</h1>
     <button onClick={()=>{setmessage("boom make your goal clear")}}>click</button>
    </div>
  )
}

export default Funcone