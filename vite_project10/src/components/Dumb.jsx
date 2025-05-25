import {useState} from 'react'

function Dumb() {
const[input,setInput] = useState('')  
const [todo,setTodo] = useState([])


const handleAdd = ()=>{
  if (input.trim() === '') return;
  setTodo([...todo,{text:input ,iscompleted:false}])
  setInput('')
}
const handleEdit = ()=>{
  
}

const handleDelete = ()=>{
  
}  

const handleChange = (e)=>{
setInput(e.target.value)
}
  return (
    <div className="container  mx-auto my-5 rounded-xl p-5 bg-cyan-500 h-[90vh]">
        <div className="">
            <h1 className='text-2xl capitalize'> your todos</h1>
            <input type="text" className='w-[50%] ' onChange={handleChange} value={input} /> 
            <button className='bg-violet-700 m-5 p-1 rounded text-white' onClick={handleAdd} >Add</button>

           <div className="todos">
  <h2 className="text-2xl font-bold mb-4">Your Todos</h2>

  {todo.map((item,index) => (
    <div key={index} className="todo-2 bg-gray-100 p-4 mb-4 rounded shadow flex items-center justify-between" >
      <p className="">{item.text}</p>
      <div className="flex gap-2">
        <button
          className="bg-violet-700 px-3 py-1 rounded text-white"
          onClick={() => handleEdit()}
        >
          Edit
        </button>
        <button
          className="bg-violet-700 px-3 py-1 rounded text-white"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>


        </div>

    </div>
  )
}

export default Dumb
