import React, { useEffect, useState } from 'react'
import "./Card.css"
function Card() {
    const [cards, Setcards] = useState([])


    const fetchData = async ()=>{
        let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await a.json()
        Setcards(data)
        console.log(data)
    }
 useEffect(()=>{
fetchData()
 },[])

  return (
    <div className='container'>
      {cards.map((card)=>{
        return <div className="card" key={card.id}>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>ny user id {card.userid}</span>
        </div>
      })}
    </div>
  )
}

export default Card
