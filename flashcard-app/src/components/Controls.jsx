import './Controls.css'

export function Controls({onPrev,onNext,onFlip,onStartAgain}) {
  return (
    <div className='controls-container'>
      <button 
       className='prev-button'
       onClick={onPrev}
      >
        Prev
      </button>
      <button 
       className="flip-button"
        onClick={onFlip}
       >
        Flip
      </button>
      <button
       className='next-button'
       onClick={onNext}
       >Next
      </button>
      <button  
       onClick={onStartAgain}
       className='start-again-button'>
        
        Start Over
      </button>
    </div>
  )
}