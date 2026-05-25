import './PasswordOptions.css'

export function PasswordOptions({length,setLength}) {
  return (
    <div className='options-container'>
      <div className='length-container'>
        <span className='label'>Password Length</span>
        <span className='password-length'>{length}</span>
      </div>
      <input type='range'
        value={length}
        onChange={(e) => setLength(e.target.value)}
        min={8}
        max={20}
        className='range-selector'
      />
      <p>Include: </p>
      <div className='checkbox-container '>
        <div>
          <input type='checkbox' id="uppercase"
           
          />
          <label htmlFor='uppercase'>Uppercase (A-Z)</label>
        </div>
        <div>
          <input type='checkbox' id="lowercase" />
          <label htmlFor='lowercase'>Lowercase (a-z) </label>
        </div>
        <div>
          <input type='checkbox' id="numbers" />
          <label htmlFor='numbers'>Numbers (0-9) </label>
        </div>
        <div>
          <input type='checkbox' id="symbols" />
          <label htmlFor='symbols'>Symbols (!@#$...) </label>
        </div>
        
      </div>

      <div className='button-container'>
        <button
         className='generate-password-button'
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}