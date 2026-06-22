const CheckBoxInput = ({handleUppercase,handleLowercase,handleNumbers,handleSymbols,upper,lower,numbers,symbols}) => {
  return (
    <>
      <p className="mt-4 font-bold text-base mb-6">Include: </p>
      <div className="grid grid-cols-2 place-content-center gap-x-5 gap-y-3 px-2">

        <div  className="bg-[#f5f5f5] border border-slate-300 py-4 px-2 rounded-lg">
          <input type="checkbox" id="uppercase"
           onChange={handleUppercase}
           checked={upper}
           className="mr-2 ml-1 cursor-pointer scale-[1.2] accent-blue-700"
          />
          <label
           className="font-bold text-base"
           htmlFor="uppercase">Uppercase (A-Z)</label>
        </div>

        <div className="bg-[#f5f5f5] border border-slate-300 py-4 px-2 rounded-lg">
          <input type="checkbox" id="lowercase"
           onChange={handleLowercase}
           checked={lower}
           className="mr-2 ml-1 cursor-pointer scale-[1.2] accent-blue-700"
          />
          <label 
           className="font-bold text-base"
           htmlFor="lowercase">Lowercase (a-z) </label>
        </div>

        <div className="bg-[#f5f5f5] border border-slate-300 py-4 px-2 rounded-lg">
          <input type="checkbox" id="numbers"
           onChange={handleNumbers}
           checked={numbers}
           className="mr-2 ml-1 cursor-pointer scale-[1.2] accent-blue-700"
          />
          <label
           className="font-bold text-base" 
           htmlFor="numbers">Numbers (0-9) </label>
        </div>

        <div className="bg-[#f5f5f5] border border-slate-300 py-4 px-2 rounded-lg">
          <input type="checkbox" id="symbols" 
           onChange={handleSymbols}
           checked={symbols}
           className="mr-2 ml-1 cursor-pointer scale-[1.2] accent-blue-700"
          />
          <label
           className="font-bold text-base" 
           htmlFor="symbols">Symbols (!@#$...) </label>
        </div>
      </div>
    </>
  );
}


export default CheckBoxInput