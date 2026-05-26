export function CheckBoxInput({handleUppercase,handleLowercase,handleNumbers,handleSymbols,upper,lower,numbers,symbols}) {
  return (
    <>
      <p>Include: </p>
      <div className="checkbox-container ">
        <div>
          <input type="checkbox" id="uppercase"
           onChange={handleUppercase}
           checked={upper}
          
          />
          <label htmlFor="uppercase">Uppercase (A-Z)</label>
        </div>
        <div>
          <input type="checkbox" id="lowercase"
           onChange={handleLowercase}
           checked={lower}
          />
          <label htmlFor="lowercase">Lowercase (a-z) </label>
        </div>
        <div>
          <input type="checkbox" id="numbers"
           onChange={handleNumbers}
           checked={numbers}
          />
          <label htmlFor="numbers">Numbers (0-9) </label>
        </div>
        <div>
          <input type="checkbox" id="symbols" 
           onChange={handleSymbols}
           checked={symbols}
          />
          <label htmlFor="symbols">Symbols (!@#$...) </label>
        </div>
      </div>
    </>
  );
}
