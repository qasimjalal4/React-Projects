
const SearchBar = ({ query, setQuery, onSearch}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <input
      className="flex-1  px-4 py-2 rounded-md font-semibold outline-none border-2 border-gray-400"
      placeholder="Enter your city..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && onSearch()}
      />
      <button
       className="bg-blue-600 px-5 py-2 rounded-md text-white font-semibold cursor-pointer hover:opacity-90"
      onClick={onSearch}

      >Search</button>
    </div>  
  )
}

export default SearchBar