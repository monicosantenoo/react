import  { useState } from 'react'


function Form() {
    
     const [value, setValue] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitted name: ' + value);
      };
   return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form
