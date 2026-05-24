import { cards } from './data/cards';
import { Header } from './components/Header';
import { FlashCard } from './components/FlashCard'
import { Controls } from './components/Controls';
import { ProgressBar } from './components/ProgressBar';
import './App.css'
import { useState } from 'react'

function App() {

   
  const [isFlipped,setIsFlipped] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);

 
  function prevQuestion() {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
        setIsFlipped(false);
    } 

   
  }

  function nextQuestion() {

    if(currentIndex < cards.length-1) {
      setCurrentIndex(currentIndex + 1);

       setIsFlipped(false);
    } 

  }

  function flipCard() {
    setIsFlipped(!isFlipped)
  }

  function startAgain() {
    setCurrentIndex(0);

    setIsFlipped(false);
  }

  const progress = ((currentIndex + 1) / cards.length ) * 100;



  return (
    <div className='app-container'>
      <Header  cards={cards} currentIndex={currentIndex} />
     <ProgressBar progress={progress} />     
     <FlashCard card={cards[currentIndex]} isFlipped={isFlipped} onFlip={flipCard} currentIndex={currentIndex} />
     <Controls cards={cards} onPrev={prevQuestion} onNext={nextQuestion} onFlip={flipCard} onStartAgain={startAgain}  />  
    </div>
  )
}

export default App
