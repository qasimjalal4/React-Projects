import { Header } from './components/Header'
import { PasswordDisplay } from './components/PasswordDisplay'
import { PasswordOptions } from './components/PasswordOptions'
import './App.css'
import { useState } from 'react'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [options, setOptions] = useState({
    upperacase: 'true',
    lowercase: 'false',
    numbers: 'true',
    symbols: 'false'
  })
  
  return (
    <div className='app-container'>
      <Header />
      <PasswordDisplay password={password}  />
      <PasswordOptions length={length} setLength={setLength}  options={options} setOptions={setOptions} />
    </div>
  )
}

export default App
