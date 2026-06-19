

export function NotesCard({notes,onDelete}) {
  return (
      <div className="grid grid-cols-3 mt-10 mx-8 gap-x-5 gap-y-4 ">
      {notes.map((note) => {
        return (
          <div
            key={note.id}
          className=" h-64 bg-white border border-[rgb(200, 200, 200)] rounded-lg py-[12px] px-[14px] shadow-md flex flex-col
            "
           style={{borderLeft: `4px solid ${note.color}`}}
          >
            <div className="text-lg font-bold mb-2">{note.title}</div>
            <div className="overflow-hidden">{note.body}</div>
            <div className="flex justify-between pr-2 items-center mt-auto">
              <span className="text-sm text-[rgb(120, 120, 120)]">
                {note.date}
              </span>
              <button
                className="text-[rgb(120, 120, 120)] text-lg font-semibold cursor-pointer
               active:text-red-700"
               onClick={() => onDelete(note.id)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}