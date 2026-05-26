import './Notescard.css'

export function NotesCard({notes,onDelete}) {
  return (
    <div className='notes-grid'>
      {notes.map((note) => {
        return (
          <div key={note.id} className='note-card'>
           <div className='note-title'>
             {note.title}
           </div>
           <div className='note-desc'>
            {note.body}
           </div>
           <div className='bottom-row'>
            <span>{note.date}</span>
            <button
             onClick={() => onDelete(note.id)}
            >X</button>
           </div>
          </div>
        )
      })}
    </div>
  )
}