import { useEffect } from "react";

const PasswordGenerator = ({generateButton}) => {

  useEffect(() => {
    generateButton();
  },[generateButton])

  return (
      <button className="mt-7 w-[94%] ml-3  bg-[#064ec2] text-base font-bold text-white border-none rounded-lg py-[10px]
       hover:opacity-90 active:opacity-70 transition-opacity
       "
       onClick={generateButton}
      >Generate Password</button>
  );
}


export default PasswordGenerator