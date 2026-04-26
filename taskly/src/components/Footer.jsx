import './Footer.css'

export function Footer({remaining,completed,clearCompleted}) {

  return (
    <div className='footer'>
     <span
      className='remaining-tasks-length'>
      {remaining} {remaining <= 1 ? 'task ':'tasks ' } 
          remaining
     </span>
     <button
      className='clear-button'
      onClick={clearCompleted}
      disabled={completed === 0}
      >
      Clear Completed({completed})
     </button>
    </div>
  )
}