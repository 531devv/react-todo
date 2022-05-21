import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');
const [id, setId] = useState(0);

const handleChange = (e) => {
    setInput(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();

    setId(id + 1);

    props.onSubmit({
        id: id,
        text: input
    });

    setInput('');
}

  return (
      <form className="todo-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Add a todo" 
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button">Add todo</button>
      </form>
  )
}

export default TodoForm