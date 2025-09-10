import React from 'react'


function Componentc({user}){
  return <h1>Hello {user}</h1>
}
function Componentb({user}){
 return <Componentc user={user}/>
}
function Componenta({user}){
 return  <Componentb user={user}/>
}
function Drell() {
    const user = "Priyanka";
  return (
    <Componenta user={user}/>
  )
}

export default Drell