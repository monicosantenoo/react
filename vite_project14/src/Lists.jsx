import React from 'react'

function Lists() {
  const items = ["apple","mango","strawberry"];
  const users = [
    { id: 1, name: "Jay" ,age:12},
    { id: 2, name: "Ajay",age:23 },
    { id: 3, name: "Vijay",age:24 }
  ];

  return (
    <>
    {/* iterrating array with map function  */}
      {/* <h1>my fruits </h1>
      <ul>
        {
            items.map((item,index) =>(
            <li key={index}>{item}</li>
            ))
        }
      </ul> */}



      <ul>
       {users.map((user)=>(
          user.age > 30 ? (
                    <li key={user.id}>{user.name} is over 30 years old</li>
                ) : (
                    <li key={user.id}>{user.name} is under 30 years old</li>
                )
       ))}
      </ul>
    </>
  )
}

export default Lists