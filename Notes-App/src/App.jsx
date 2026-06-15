import { Header } from './components/Header'
import { NotesCard } from './components/NotesCard';
import { Modal } from './components/Modal';
import { colors } from './constants/colors';
import { notesData } from './constants/notesData';
import { useState } from 'react'
import './App.css'
 

 

function App() {
   
  
  

  const [query,setQuery] = useState('');
  const [notes, setNotes] = useState(notesData);

   
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('')

   function saveNote() {

      

    const newNote = {
      id: crypto.randomUUID(),
      title: modalTitle,
      body: modalDesc,
      date: new Date().toLocaleDateString(),
      color: colors[Math.floor(Math.random() * colors.length)]
    }

    setNotes([...notes, newNote])

     setModalTitle('')
     setModalDesc('')
     setIsModalOpen(false)
   }


  function deleteCard(id) {

    setNotes(prev => [...prev.filter(card => card.id !== id)])
  }

  const filteredNotes = notes.filter(note => 
     note.title.toLowerCase().includes(query.toLowerCase()));

  
     
  return (
    <div className='app-container'>
      <Header notesCount={notes.length} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalTitle={modalTitle} setModalTitle={setModalTitle} modalDesc={modalDesc} setModalDesc={setModalDesc} onSave={saveNote} />
      <input
       className='search-bar'
       placeholder='Search your notes...'
       type='text'
       onChange={e => setQuery(e.target.value)}
       value={query}
      />
      <NotesCard  notes={filteredNotes}   onDelete={deleteCard} />
      <Modal isModalOpen={isModalOpen}
       setIsModalOpen={setIsModalOpen}
       modalTitle={modalTitle} setModalTitle={setModalTitle}
       modalDesc={modalDesc} setModalDesc={setModalDesc}
       onSave={saveNote}  />
       
    </div>
  )
}

export default App
