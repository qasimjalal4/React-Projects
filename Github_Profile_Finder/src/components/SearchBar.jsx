
const SearchBar = () => {
  return (
    <div className="flex w-[480px] gap-6 items-center">
      <input
       className="bg-[#fff] border border-[#e2e8f0] text-[#0f172a] outline-none
       focus:border-[#667eea] flex-1 py-[10px] px-2 rounded-md
       "
      />
      <button
       className="bg-[#667eea] text-white px-4 py-[6px] rounded-md cursor-pointer font-semibold
       hover:bg-[#764ba2]
       "
      >Search</button>
    </div>
  )
}

export default SearchBar