import { Outlet } from 'react-router-dom'
import { Header } from './Pages/Header'

function App() {
  

  return (
    <>
      <div className='h-screen max-w-2xl mx-auto bg-[#f4f6f9] shadow'>
        <Header  />
        <Outlet />
      </div>
 
    </>
  )
}

export default App
