import { useState, useCallback } from 'react';


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
    <div className="w-[70%] bg-[#ffffff] mx-auto rounded-lg py-4 px-4 shadow flex items-center mb-10">
      <input
       className="flex-1 h-10 py-1 px-[6px] bg-transparent outline-none border-none mr-2"
       value={password}
       type='text'
       placeholder="Select atleast one option"
       readOnly
      />
      <button
       className="bg-[#1069f8] text-white border-none px-4 py-[6px] rounded-lg font-bold text-[15px] cursor-pointer ml-1"
       disabled={!password || password.includes('Please')}
       onClick={Copy}
      >{isCopied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}