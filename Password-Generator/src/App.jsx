import { Header } from './components/Header'
import { PasswordDisplay } from './components/PasswordDisplay'
import './App.css'
import { useState } from 'react'

function App() {

  const [password, setPassword] = useState('');

  
  return (
    <div className='app-container'>
      <Header />
      <PasswordDisplay password={password}  />
    </div>
  )
}

export default App
