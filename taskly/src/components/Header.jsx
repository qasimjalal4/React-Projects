import dayjs from 'dayjs'
import './Header.css'

export function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <h1 className='title'>Task<em>ly</em></h1>
        <span className="date-badge">{dayjs().format('dddd, MMMM D')}</span>
      </div>
      <p className="tagline">
        Stay Focused.Keep working hard. 
      </p>
    </div>
  )
}