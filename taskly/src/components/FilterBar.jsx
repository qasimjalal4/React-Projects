

export function FilterBar({filter,setFilter}) {

  return (
    <div className="w-[520px] mx-auto flex bg-white h-[52px] mt-9 rounded-lg border border-[#e0ded9]
     justify-center items-center px-[5px]
    ">
      {['All','Active','Completed'].map((tab) => {
        return (
          <button 
           key={tab}
           onClick={() => {
            setFilter(tab)
           }}
           className={`flex-1  border-none  rounded-md py-[10px] cursor-pointer text-sm
           ${filter === tab ? 'bg-[#4f7c6b] text-white': 'bg-white text-gray-500'}
        ` }>
            {tab} 
          </button>
        )
      })}
    </div>
  )
}