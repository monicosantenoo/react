import React, { useState } from 'react'

function Sum() {
    const [color ,setcolor] = useState('olive');
  return (
    <div class="h-screen bg-red-500 flex flex-col" style={{backgroundColor :color}}>
  <div class="flex-grow"></div>
  <div class="p-4 bg-white shadow flex justify-around">
    <button onClick={()=> setcolor("red")}   class="bg-red-600 text-white px-4 py-2 rounded">Red</button>
    <button  onClick={()=> setcolor("blue")} class="bg-blue-600 text-white px-4 py-2 rounded">Blue</button>
    <button  onClick={()=> setcolor("green")} class="bg-green-600 text-white px-4 py-2 rounded">Green</button>
    <button  onClick={()=> setcolor("aqua")} class="bg-sky-600 text-white px-4 py-2 rounded">aqua</button>
    <button  onClick={()=> setcolor("lime")} class="bg-lime-600 text-white px-4 py-2 rounded">lime</button>
    <button  onClick={()=> setcolor("gray")} class="bg-gray-600 text-white px-4 py-2 rounded">Gray</button>
  </div>
</div>

  )
}

export default Sum
