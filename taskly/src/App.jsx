import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput'
import { Stats } from "./components/Stats";
import './App.css'

function App() {
   

  return (
    <div className='app-container'> 
     <Header />
     <TodoInput />
     <Stats />
    </div>
  )
}

export default App
