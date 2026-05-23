import './Header.css'

export function Header({currentIndex,cards}) {
  return (
    <div className='header'>
      <h3>React Flashcards</h3>
      <span className='question-number'>{currentIndex + 1} / {cards.length}</span>
    </div>
  )
}