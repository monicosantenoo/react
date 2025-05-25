import { useState } from 'react'

function Selftry() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems([...items, { text: input }])
    setInput('')
    console.log(items)
  }

  const handleDelete = (indextodel) => {
    const updatelist = items.filter((_,index) => index !== indextodel)
    setItems(updatelist)
  }


  return (
    <>
      <div className='m-6' >
        <input type="text" value={input} onChange={handleChange} className='border border-indigo-600' />
        <button className='bg-violet-700 m-5 p-2 rounded text-white' onClick={handleAdd} >click me</button>
      </div>

      <div className="p-4 bg-gray-100 min-h-screen">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 bg-white rounded shadow"
            >
              <span>{item.text} </span>
              <button className="bg-violet-700 hover:bg-violet-800 px-4 py-1 rounded text-white transition" onClick={()=>handleDelete(index)} >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default Selftry
