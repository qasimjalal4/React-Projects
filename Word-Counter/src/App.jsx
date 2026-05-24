import { TextArea } from './components/TextArea'
import { Header } from './components/Header';
import './App.css'
import { useState } from 'react'

function App() {
 
  const [text,setText] = useState('');

  function inputText(event) {
    setText(event.target.value)
  }

  return (
    <div className='app-container'>
      <Header />
      <TextArea text={text} inputText={inputText} />
    </div>
  )
}

export default App
