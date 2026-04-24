import { useState } from 'react'
import './TodoInput.css'

export function TodoInput() {

  const [inputText,setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value)
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
        
      >Add</button>
  
    </div>
          
     
  )
}