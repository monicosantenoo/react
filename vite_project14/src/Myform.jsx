import  { useState } from 'react'

function Myform() {
    const [name ,setname] = useState("");
    const handele = (e)=>{
        e.preventDefault();
        alert(`hello  ${name}`)
    }
  return (
    <>
    <form onSubmit={handele}>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your name'/>
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Myform