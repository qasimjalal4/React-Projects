import './TodoItem.css'

export function TodoItem({todo,onToggle,onDelete}) {

   

  return (
     <div className='todo-item'>
      <div className={`checkbox ${todo.done ? 'checked': ''}`}
       onClick={() => {
        onToggle(todo.id)
       }}
      >
         {todo.done && <span>✔</span>}
      </div>
      <div className={`todo-text ${todo.done ? 'done' : ''}`}>
        {todo.task}
      </div>
      <button
       onClick={() => {
        onDelete(todo.id)
       }}
       className='delete-button'>
        Delete
      </button>
    </div>
  )
}