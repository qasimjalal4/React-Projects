
const SearchBar = () => {
  return (
    <div className="w-full flex justify-center mt-5">
      <input 
       placeholder="Search your notes..."
       className="h-12 w-1/3 py-2 px-4 outline-none rounded-lg 
       border border-[rgb(200, 200, 200)] text-md 
       focus:border-blue-500
       "
       />
    </div>
  )
}

export default SearchBar