import { useState } from 'react'
import './TodoInput.css'

export function TodoInput({todos,setTodos}) {

  const [inputText,setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function addTodo() {
   
    if(!inputText) {
      return;
    }

    setTodos([...todos, {
      id: crypto.randomUUID(),
      task: inputText,
      done: false
    }])

    setInputText('')
  }

  

  return (
    
    <div className="input-container">
       <div className='input-parent'>
        <span className='input-icon'>+</span>
      <input 
       className="todo-input"
       onChange={saveInputText}
       value={inputText} 
       placeholder='Enter your new task'
       />
       </div>
       <button
       className="add-button"
       onClick={addTodo}    
      >Add</button>
  
    </div>
          
     
  )
}