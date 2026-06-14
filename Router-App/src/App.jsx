import { Outlet } from 'react-router-dom'
import { Header } from './Pages/Header'

function App() {
  

  return (
    <>
      <div className='h-screen max-w-2xl mx-auto bg-slate-50 shadow'>
        <Header  />
        <Outlet />
      </div>
 
    </>
  )
}

export default App
