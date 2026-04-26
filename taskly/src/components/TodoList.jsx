import { TodoItem } from "./TodoItem" 
import './TodoList.css'

export function TodoList({todos,onToggle,onDelete}) {

  return (
    <div className="todo-list">
     {todos.map((todo) => {
       return (
        <>
          <TodoItem key={todo.id} todo={todo}  onToggle={onToggle} onDelete={onDelete} />
        </>
       )

    })}
   </div>
  )
} 