
const SearchBar = ({inputText,setInputText, onSearch}) => {
 

  return (
    <div className="flex w-[550px] gap-6 items-center">
      <input
       placeholder="Search username"
       onChange={event => setInputText(event.target.value)}
       value={inputText}
       className="bg-[#fff] border-[1.5px] border-[#e2e8f0] text-[rgb(15,23,42)] outline-none
       focus:border-[#667eea] flex-1 py-[10px] px-2 rounded-md
       "
      />
      <button
       className="bg-[#667eea] text-white px-4 py-2 rounded-md cursor-pointer font-semibold
       hover:bg-[#764ba2]
       "
       onClick={onSearch}
      >Search</button>
    </div>
  )
}

export default SearchBar