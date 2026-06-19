 import NotesImage from '/Notes.png'

const Header = ({notesLength,setIsModalOpen}) => {
  return (
    <header className=" h-[110px] grid grid-cols-3">
      <div className="flex flex-col gap-2 pl-10 pt-4">
        <img src={NotesImage} width={50} height={50} />
        <span className='font-semibold text-[rgb(120,120,120)]'>{notesLength} {notesLength === 1 ? 'Note':'Notes'}</span>
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-5xl font-extrabold'>My Notes</span>
      </div>
      <div className='flex justify-center items-center '>
        <button 
         onClick={() => setIsModalOpen(true)}

         className=' ml-8 px-5 py-[10px] border-none rounded-lg bg-blue-400
          cursor-pointer text-base text-white
           hover:opacity-90 active:opacity-75 transition-all
          '>
            + New Note
        </button>
      </div>
    </header>
  )
}

export default Header