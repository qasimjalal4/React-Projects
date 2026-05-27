import './Modal.css'

export function Modal({isModalOpen,setIsModalOpen,modalTitle,setModalTitle,modalDesc,setModalDesc,onSave}) {
  return (
     <>
       {isModalOpen && 
      <div className= 'overlay'>
      <div className='modal'>
        <h2>New Note</h2>
        <input
         value={modalTitle}
         placeholder='Title'
         onChange={e => setModalTitle(e.target.value)}
        />
        <textarea
         placeholder='Write your note here...'
         value={modalDesc}
         onChange={e => setModalDesc(e.target.value)}
        />
        <button
         className='cancel-button'
         onClick={() => setIsModalOpen(false)}
        >Cancel</button>
        <button
         onClick={onSave}
         className='save-button'
         disabled={!modalTitle || !modalDesc}
        >Save Note</button>

      </div>
    </div>
     }
     </>
  )
}