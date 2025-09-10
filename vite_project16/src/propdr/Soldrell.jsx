import React, { createContext,useContext } from 'react'

const usercontext = createContext();
function Componentc(){
     const user = useContext(usercontext);
 return <h1> hello meri {user}</h1>
}
function Componentb(){
 return  <Componentc/>
}

function Componenta(){
  return  <Componentb/>
}

function Soldrell() {
    const user = "priyaa";

  return (
   <usercontext.Provider value ={user}>
    <Componenta/>
   </usercontext.Provider>
  )
}

export default Soldrell