 
import { Outlet } from 'react-router'
import './App.css'
import { Header } from './Pages/Header'

function App() {
  

  return (
    <>
      <div className='app-container'>
        <Header />
        <Outlet />
      </div>
 
    </>
  )
}

export default App
