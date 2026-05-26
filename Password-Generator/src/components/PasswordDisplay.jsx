import { useState, useCallback } from 'react';
import './PasswordDisplay.css'

export function PasswordDisplay({password}) {

   const [isCopied, setIsCopied] = useState(false);
  
    const CopyToClipboard = useCallback(() => {
  
      if(!password || password === 'Please select at least one option') {
        return;
      }

      navigator.clipboard.writeText(password);
  
    },[password])
  
    function Copy() {
      CopyToClipboard();
      setIsCopied(true);

      setTimeout(() => {
         
        setIsCopied(false);
      }, 2000)
    }

  return (
    <div className='password-container'>
      <input
       value={password}
       className='password-input'
       type='text'
       placeholder="Select atleast one option"
       readOnly
      />
      <button
       disabled={!password || password.includes('Please')}
       onClick={Copy}
       className={isCopied ? 'copied-button': 'copy-button'}
      >{isCopied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}