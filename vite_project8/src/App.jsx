import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos , setodo]= useState([
    {
      titile:"hey i am A",
      desc:"I am a good to do "
    },
    {
      titile:"hey i am B ",
      desc:"I am a good to do "
    },
    {
      titile:"hey i am C ",
      desc:"I am a good to do "
    }

  ])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn?<button> i will be shown only when second another button is clicked </button>:""} */}
      {showbtn && <button> iwill shown again </button>}



      {todos.map(todo=>{
       return <div key={todo.title} className="m-4 border-2 bg-purple-600 ">
        <div className='todo'>{todo.title} </div>
        <div className="todo">{todo.desc} </div>
        </div>
      })}




      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
