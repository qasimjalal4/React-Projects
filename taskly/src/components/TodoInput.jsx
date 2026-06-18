import { useState } from 'react'

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
    
    <div className="w-full flex mt-7 gap-5 items-center">
       <div  className="flex flex-1 ml-9 border border-[#e0ded9] pl-3 rounded-lg items-center bg-white
        focus-within:border-[#4f7c6b]
        focus-within:ring-2
        focus-within:ring-[#4f7c6b]/10  
      ">
        <span className="bg-white text-gray-500 text-xl ml-2 mr-3"
        >+</span>
      <input 
       className="outline-none flex-grow bg-white border-none text-black text-[15px] py-[15px] rounded-lg"
       onChange={saveInputText}
       value={inputText} 
       placeholder='Enter your new task'
       />
       </div>
       <button
        className="border-none bg-[#4f7c6b] text-white cursor-pointer
       py-[7px] px-[26px] rounded-md mr-8 text-base font-semibold
       hover:opacity-90 active:opacity-75 transition-all
       "
       onClick={addTodo}    
      >Add</button>
  
    </div>
          
     
  )
}