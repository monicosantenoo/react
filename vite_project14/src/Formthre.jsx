import React, { useState } from 'react'

function Formthre() {
    const [inputVal , setValue] = useState("");
    function handleChange(e){
        setValue(e.target.value)
    }
     function onSumit(e){
        e.preventDefault();
     console.log("hello bsdk")
     }
  return (
   <>
   <form action="" onSubmit={onSumit}>
    <label htmlFor="">input yourname</label>
    <input type="text" value={inputVal} onChange={handleChange}/>
   </form>
   <br />
   <p>Entered Value : {inputVal}</p>
   </>
  )
}

export default Formthre;