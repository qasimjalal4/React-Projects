
import NoteImg from '/Notes.png'
import './Header.css'


export function Header({notesCount,setIsModalOpen}) {
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
        <button className='new-note-button'
         onClick={() => setIsModalOpen(true)}
        >+ New Note</button>

      
      </div>

   

    </div>

      
  )

   
}