import './Footer.css'

export function Footer({remaining,completed,clearCompleted}) {

  return (
    <div className='pt-3 w-[480px] flex justify-between mx-auto'>
     <span
      className='text-gray-500 text-sm'>
      {remaining} {remaining <= 1 ? 'task ':'tasks ' } 
          remaining
     </span>
     <button
      className="bg-none text-gray-500 cursor-pointer text-sm active:opacity-80"
      onClick={clearCompleted}
      disabled={completed === 0}
      >
      Clear Completed({completed})
     </button>
    </div>
  )
}