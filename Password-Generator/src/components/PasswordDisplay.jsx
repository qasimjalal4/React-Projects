import './PasswordDisplay.css'

export function PasswordDisplay({password}) {
  return (
    <div className='password-container'>
      <input
       value={password}
       className='password-input'
       placeholder="Select atleast one option"
       readOnly
      />
      <button
       className='copy-button'
      >Copy
      </button>
    </div>
  )
}