import { Header } from './components/Header'
import { PasswordDisplay } from './components/PasswordDisplay'
import { PasswordOptions } from './components/PasswordOptions'
import './App.css'
import { useCallback, useState } from 'react'


    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    const SYMBOLS = '!@#$%^&*()_+{}[]<>?';  

 function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isUpperCaseAllowed,setIsUpperCaseAllowed] = useState(false);
  const [isLowerCaseAllowed, setIsLowerCaseAllowed] = useState(false);
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  const [isSymbolsAllowed, setIsSymbolsAllowed] = useState(false);
 
  


    const shuffleArray = useCallback((array) => {
    for( let i = array.length-1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))

    
      ;[array[i], array[j]] = [array[j], array[i]];
    }

    return array;
   }, [])   

  const passwordGenerator = useCallback(() => {

    
   

    let container = '';
    let pass = [];    

     
    
    if (isUpperCaseAllowed) container += UPPER;

    if(isLowerCaseAllowed) container += LOWER;

    if(isNumbersAllowed) container += NUMBERS;

    if(isSymbolsAllowed) container += SYMBOLS;    


     if(container === ''){
      setPassword('Please select at least one option');
      return;
     }


     if(isUpperCaseAllowed) {
      pass.push(UPPER[Math.floor(Math.random() * UPPER.length)])
    }

    if(isLowerCaseAllowed) {
      pass.push(LOWER[Math.floor(Math.random() * LOWER.length)])
    }

     if(isNumbersAllowed) {
      pass.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)])
    }

     if(isSymbolsAllowed) {
      pass.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)])
    }

 
    

    while(pass.length < length) {
      let index = Math.floor(Math.random() * container.length);
      pass.push(container[index])
    }

    shuffleArray(pass)

    setPassword(pass.join(''));

  }, [length,isUpperCaseAllowed, isLowerCaseAllowed, isNumbersAllowed, isSymbolsAllowed,shuffleArray])


  
  function handleUppercase() {
    setIsUpperCaseAllowed(prev => !prev);
  }

  function handleLowercase() {
    setIsLowerCaseAllowed(prev => !prev);
  }

  function handleNumbers() {
    setIsNumbersAllowed(prev => !prev);
  }

  function handleSymbols() {
    setIsSymbolsAllowed(prev => !prev);
  }

  
   

  return (
    <div className='app-container'>
      <Header />
      <PasswordDisplay 
       password={password}
      />
      <PasswordOptions
       length={length} 
       setLength={setLength}
       handleUppercase={handleUppercase}
       handleLowercase={handleLowercase}
       handleNumbers={handleNumbers}
       handleSymbols={handleSymbols}
       upper={isUpperCaseAllowed}
       generateButton={passwordGenerator}
       lower={isLowerCaseAllowed}
       numbers={isNumbersAllowed}
       symbols={isSymbolsAllowed}
       />
    </div>
  )
}

export default App
