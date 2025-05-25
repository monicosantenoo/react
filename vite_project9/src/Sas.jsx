import React from 'react'
import { useState } from 'react'
function Sas() {
const [form,setform] = useState({email:"",phone:""})

   const handleChange =(e)=>{
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <div>
     <div className='App'>
      <input type="text" onChange={handleChange} name="email" value={form.email}/>
      <input type="text" onChange={handleChange} name="phone" value={form.phone}/>
    </div>
    </div>
  )
}

export default Sas
