import { useState } from 'react';

function Hero() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, isCompleted: false }]);
    setInput('');
  };

  const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  const handleEdit = (indexToEdit) => {
    const newTodo = prompt('Edit todo:', todos[indexToEdit].text);
    if (newTodo !== null && newTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[indexToEdit].text = newTodo;
      setTodos(updatedTodos);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container mx-auto my-5 rounded-xl p-5 bg-cyan-500 h-[90vh]">
      <h1 className='text-2xl capitalize'>Your Todos</h1>
      <input
        type="text"
        className='w-[50%] p-2 rounded'
        onChange={handleChange}
        value={input}
        placeholder="Enter a todo"
      />
      <button className='bg-violet-700 m-5 p-2 rounded text-white' onClick={handleAdd}>
        Add
      </button>

      <div className="todos">
        <h2 className="text-2xl font-bold mb-4">Your Todos</h2>
        {todos.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 mb-4 rounded shadow flex items-center justify-between"
          >
            <p className="text-lg">{item.text}</p>
            <div className="flex gap-2">
              <button
                className="bg-violet-700 px-3 py-1 rounded text-white"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 px-3 py-1 rounded text-white"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
