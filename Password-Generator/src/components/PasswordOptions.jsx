import { LengthInput } from './LengthInput'
import { CheckBoxInput } from './CheckBoxInput'
import { PasswordGenerator } from './PasswordGenerator'

import './PasswordOptions.css'

export function PasswordOptions({length,setLength}) {
  return (
    <div className='options-container'>
       
       <LengthInput length={length} setLength={setLength} />

       <CheckBoxInput />

       <PasswordGenerator />

    </div>
  )
}