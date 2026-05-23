import { cards } from './data/cards';
import { FlashCard } from './components/FlashCard'
import { Controls } from './components/Controls';
import './App.css'
import { useState } from 'react'

function App() {

   
  const [isFlipped,setIsFlipped] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);

 
  function prevQuestion() {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } 

    setIsFlipped(false)
  }

  function nextQuestion() {

    if(currentIndex < cards.length-1) {
      setCurrentIndex(currentIndex + 1)
    } 

    setIsFlipped(false);
  }

  function flipCard() {
    setIsFlipped(!isFlipped)
  }

  function startAain() {
    setCurrentIndex(0);
  }

  return (
    <div className='app-container'>
     <FlashCard isFlipped={isFlipped} onFlip={flipCard} currentIndex={currentIndex} />
     <Controls onPrev={prevQuestion} onNext={nextQuestion} onFlip={flipCard} onStartAgain={startAain}  />      
    </div>
  )
}

export default App
