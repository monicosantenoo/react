import  { useState } from 'react'

function FormTwo() {
    const [inputValue , Setinput] = useState(" ");

   function onInputChange(event)
    {
       Setinput(event.target.value);
       console.log(event.target.value);
    }
  return (
   <>
   <form action="">

    <label htmlFor=""> enter text </label>
    <input type="text" value={inputValue} onChange={onInputChange} />
   </form>
   </>
  )
}

export default FormTwo