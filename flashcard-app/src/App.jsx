import { cards } from './data/cards';
import { FlashCard } from './components/FlashCard'
import './App.css'
import { useState } from 'react'

function App() {

   
  const [isFlipped,setIsFlipped] = useState(false);
  const [index,setIndex] = useState(0);

  function nextQuestion() {
    if(index < cards.length) {
      setIndex(index + 1)
    } else {
      setIndex(index)
    }
  }

  function flipCard() {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className='app-container'>
     <FlashCard isFlipped={isFlipped} onFlip={flipCard} index={index} />
     <button onClick ={nextQuestion}>Next</button>        
    </div>
  )
}

export default App
