import NoteImg from '../assets/Notes.png'
import './Header.css'


export function Header({notesCount}) {
  return (
    <div className='header'>
      <div className='left-side'>
        <img className='notes-image' src={NoteImg}  />
        <span className='notes-count'>{notesCount} Notes</span>
      </div>
      <div className='middle'>
        <span className='title'>My Notes</span>
      </div>
      <div className='right-side'>
        <button className='new-note-button'>+ New Note</button>
      </div>
    </div>
  )
}