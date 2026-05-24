import { TextArea } from './components/TextArea'
import { Header } from './components/Header';
import { StatsGrid } from './components/StatsGrid';
import './App.css'
import { useMemo, useState } from 'react'

function App() {
 
  const [text,setText] = useState('');

  function handleTextChange(event) {
    setText(event.target.value)
  }

  const stats = useMemo(() => {

      const chars = text.length;
      const words = text.trim() === '' ? 0 : text.trim().split(" ").length;
      const sentences = text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length;
      const  readingTime = Math.ceil((words / 200) * 60)
    return {
       chars,
       words,
       sentences,
       readingTime
    }
  }, [text])

  console.log(stats);

  return (
    <div className='app-container'>
      <Header />
      <TextArea text={text} onChange={handleTextChange} />
      <StatsGrid stats={stats} />
    </div>
  )
}

export default App
