import { LengthInput } from './LengthInput'
import { CheckBoxInput } from './CheckBoxInput'
import { PasswordGenerator } from './PasswordGenerator'

import './PasswordOptions.css'


export function PasswordOptions({length,setLength,handleUppercase,handleLowercase,handleNumbers,handleSymbols,generateButton,upper,lower,numbers,symbols}) {

  

  return (
    <div className='options-container'>
       
       <LengthInput length={length} setLength={setLength} />

       <CheckBoxInput 
        handleUppercase={handleUppercase} 
        handleLowercase={handleLowercase}
        handleNumbers={handleNumbers}
        handleSymbols={handleSymbols}
        upper={upper}
        lower={lower}
        numbers={numbers}
        symbols={symbols}
        />

       <PasswordGenerator generateButton={generateButton} />

    </div>
  )
}