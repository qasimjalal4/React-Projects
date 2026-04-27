import { BillInput } from './components/BillInput'
import { useState } from 'react';
import './App.css'

function App() {

  const [bill,setBill] = useState(0);
   

  return (
    <div className='app-container'>
       <div className='header'>Tip Calc</div>
       <div className='card'>
        <BillInput bill={bill} setBill={setBill} />
       </div>
    </div>
  )
}

export default App
