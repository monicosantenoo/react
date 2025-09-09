import React, { useState } from 'react'

function Passwordhide() {
    const [show , setshow] = useState(false);

    const toggleshow = ()=>{
        setshow(!show);
    }
  return (
    <div>
        <input type={show ? "text" : "password"} placeholder='enter password'/>
        <button onClick={toggleshow} >{show?"hide":"show"}</button>
    </div>
  )
}

export default Passwordhide