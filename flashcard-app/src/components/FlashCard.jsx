import { cards } from '../data/cards'
import './FlashCard.css'

export function FlashCard({onFlip,isFlipped,currentIndex}) {
  return (
    <div className='card-container'>
      <div className={`card ${isFlipped ? 'flip' : ''}`}
       onClick={onFlip}
      >
        <div className="front">
          <span className='question-tag'>Question</span>
          <div className='question-text'>
            {cards[currentIndex].question}
          </div>
        <span className='card-hint'>Tap to Flip</span>  
        </div>
        <div className="back">
          <span className='answer-tag'>Answer</span>
          <div className='answer-text'>
            {cards[currentIndex].answer}
          </div>
        <span className='card-hint'>Tap to Flip</span>  
        </div>
      </div>
    </div>
  )
}