import React from 'react'

function ClickEven() {
    const company = ["Ramsung","compaby","trader"];
    const handleClick = (company) =>{
        alert(`you have clicked ${company}`);
    }
  return (
   <>
   <ul>
    {company.map((company,index)=>(
        <button key={index} onClick={()=>handleClick(company)}> {company} </button>
    ))};
   </ul>
   
   </>
  )
}

export default ClickEven