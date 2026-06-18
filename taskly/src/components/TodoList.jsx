import  TodoItem  from "./TodoItem" 


const TodoList = ({todos,onToggle,onDelete}) => {
  return (
    <div className="flex flex-col gap-2 mt-8">
    
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

export default TodoList

 