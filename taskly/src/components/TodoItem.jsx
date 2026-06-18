
const TodoItem = ({todo,onToggle,onDelete}) => {
  return (
    <div className="
      flex w-[520px] h-[55px] bg-white border border-[#e0ded9]
      mx-auto rounded-lg px-[5px] items-center group 
     ">
      <div className={`w-5 h-5 rounded-md border-[1.5px] border-[#ccc] flex justify-center items-center ml-2 cursor-pointer transition-all
        hover:border-[#4f7c6b]
       ${todo.done && 'bg-[#4f7c6b] text-white'} `} 
       onClick={() => {
        onToggle(todo.id)
       }}
      >
         {todo.done && <span>✔</span>}
      </div>
      <div className={`flex-1 ml-[10px] text-[15px] text-[#1a1814] ${todo.done && 'line-through text-gray-500'} `}>
        {todo.task}
      </div>
      <button
       onClick={() => {
        onDelete(todo.id)
       }}
        className="mr-2 bg-[#fdf0ef] text-[#c0392b] text-[13px] 
        px-[10px] py-[3px]  rounded-md opacity-0  group-hover:opacity-100 transition-opacity">
        Delete
      </button>
    </div>
    
  )
}

export default TodoItem

 