import React, { useState } from 'react'

function Multip() {
    const [name,setname] = useState('');
    const [email, setemail]= useState('');
  return (
    <div>
        <form action="">
            <input type="text" value={name} placeholder='enter your namame' onChange={(e)=> setname(e.target.value)} />
            <input type="text" value={email} placeholder='enter your namame' onChange={(e)=> setemail(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Multip       