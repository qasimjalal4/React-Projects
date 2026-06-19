import  Header  from './components/Header'
import SearchBar from './components/SearchBar';
import  NotesCard  from './components/NotesCard';
import  Modal  from './components/Modal';
import { colors } from './constants/colors';
import { notesData } from './constants/notesData';
import { useState } from 'react'

 

 

function App() {
   
  
  

  const [query,setQuery] = useState('');
  const [notes, setNotes] = useState(notesData);

   
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('')

   const saveNote = () => {

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


  const deleteCard = (id) => {

    setNotes(prev => [...prev.filter(card => card.id !== id)])
  }

  const filteredNotes = notes.filter(note => 
     note.title.toLowerCase().includes(query.toLowerCase()));

  
     
  return (
    <>
      <Header notesCount={notes.length} setIsModalOpen={setIsModalOpen}  />
      <SearchBar query={query} setQuery={setQuery} />
      <NotesCard  notes={filteredNotes}   onDelete={deleteCard} />
      <Modal isModalOpen={isModalOpen}
       setIsModalOpen={setIsModalOpen}
       modalTitle={modalTitle} setModalTitle={setModalTitle}
       modalDesc={modalDesc} setModalDesc={setModalDesc}
       onSave={saveNote}  />
       
    </>
  )
}

export default App
