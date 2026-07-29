
const SearchBar = ({ query, setQuery}) => {
  return (
    <div className="w-full flex justify-center items-center h-20 gap-8">
      <input
       className="w-1/2 outline-none px-6 h-[50px] py-3 rounded-full text-black "
       placeholder="Search your movies..."
       onChange={e => setQuery(e.target.value)}
       value={query}
      />
      <button
       className="bg-red-500 px-5 py-[10px] rounded-lg border-none font-semibold cursor-pointer
       hover:opacity-95 active:opacity-85 transition-opacity
       "
      >Search</button>
    </div>
  )
}

export default SearchBar