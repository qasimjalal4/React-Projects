import './BottomRow.css'

export function BottomRow({onClear,stats}) {
  return (
    <div className='bottom-row'>
      <span className='reading-time'>Reading Time: <span className='time'>{stats.readingTime} sec</span></span>
      <button className='clear-button'
       onClick={onClear}
      >Clear</button>
    </div>
  )
}