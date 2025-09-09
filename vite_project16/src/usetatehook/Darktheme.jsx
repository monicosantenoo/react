import React, { useState } from 'react'

function Darktheme() {
    const [dark , setdark] = useState(false);
    const toogleTheme = ()=>{
        setdark(!dark)
    }
  return (
   <div style={{background: dark ? "black" : "white", color: dark ? "white" : "black", height: "100vh"}} >
      <h1> this is theme {dark ? "dark mode":"light mode"}</h1>
      <button onClick={toogleTheme}>theme</button>
   </div>
  )
}

export default Darktheme