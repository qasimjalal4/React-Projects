import { Header } from './components/Header'
import './App.css'
import { useState } from 'react'

function App() {
 
  const [text,setText] = useState('');

  return (
    <div className='app-container'>
      <Header />
      <input
       className='search-bar'
       placeholder='Search your notes...'
       type='text'
       onChange={e => setText(e.target.value)}
       value={text}
      />
    </div>
  )
}

export default App
