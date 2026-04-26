import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput'
import { Stats } from "./components/Stats";
import { FilterBar } from './components/FilterBar';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useState } from 'react';
import './App.css'

function App() {
   
  
    const [filter,setFilter] = useState('All');
    const [todos,setTodos] = useState([
      {
        id: crypto.randomUUID(),
        task: 'Built the Github Profile Finder',
        done: false
      }, {
        id: crypto.randomUUID(),
        task: 'Learn React hooks deeply',
        done: true
      }
    ])

    
   

   function toggleTodo(id) {

    setTodos(prev => prev.map(t => t.id === id ? {
      ...t, done: !t.done} : t 
     ))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const filteredTodos = todos.filter(t => {
    if(filter === 'Active') return !t.done;
    if(filter === 'Completed') return  t.done;

    return true;
  })

  function clearCompleted() {

    setTodos(todos => todos.filter(t => !t.done))
  }

  const total = todos.length;
  const completed = todos.filter(t => t.done).length;
  //const remaining =  total - completed;
  const remaining = todos.filter(t => !t.done).length;

  return (
    <div className='app-container'> 
     <Header />
     <TodoInput todos={todos} setTodos={setTodos} />
     <Stats total={total} completed={completed} remaining={remaining} />
     <FilterBar  filter={filter} setFilter={setFilter} />
     <TodoList todos={filteredTodos} setTodos={setTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
     <Footer remaining={remaining} completed={completed} clearCompleted={clearCompleted} />
    </div>
  )
}

export default App
