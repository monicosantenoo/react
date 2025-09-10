import React, { useEffect, useState } from 'react'

function Useapi() {
    const [users,setuser] = useState([])
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res=>res.json())
     .then(data=>setuser(data))
     .catch(error => console.error('Error:', error));
    },[])

   
  return (
    <ul>
        {users.map( user=> <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default Useapi