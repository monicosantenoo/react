import React, { useState } from 'react'

function Inputhan() {

    const [input , setinput] = useState(" ");
    console.log(input);
  return (
    <div>
        <input type="text" value={input} onChange={(e)=> setinput(e.target.value)} placeholder='enter your name'/>
        <h3>hello {input}</h3>
    </div>
  )
}

export default Inputhan