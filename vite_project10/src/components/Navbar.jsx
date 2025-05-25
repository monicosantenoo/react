import React from 'react'

function Navbar() {
  return (

 <nav className='flex justify-between bg-fuchsia-600 items-center' >
    <div className="logo">
         <span className='text-xl text-blue-800  ' >Taskme </span>
    </div>
     <ul className='flex gap-9 m-5 justify-evenly'>
        <li>Home</li>
        <li>Totask</li>
     </ul>
 </nav>
   
 
  )
}

export default Navbar
