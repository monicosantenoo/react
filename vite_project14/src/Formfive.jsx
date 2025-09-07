import  { useState } from 'react'

function Formfive() {
 const [user,Setuser]= useState({username:'',email:''});

 function onsumit(e){
    e.preventDefault();
    console.log("submited sucess");
 }
  return (
    <>
    <form action="" onSubmit={onsumit}>
        <label htmlFor=""> enter username</label>
        <input type="text" onChange={(e)=> Setuser({...user,username:e.target.value})}/>
        <br />
        <label htmlFor=""> enter email</label>
        <input type="text" onChange={(e)=> Setuser({...user,email:e.target.value})}/>
        <br />
      
        <input type="submit"/>
        <br />
    </form>
    <div>Submitvalue :name :{user.username} or {user.email}</div>
    </>
  )
}

export default Formfive;