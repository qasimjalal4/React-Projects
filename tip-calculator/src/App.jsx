import { BillInput } from './components/BillInput'
import { TipSelector } from './components/TipSelector';
import { useState } from 'react';
import './App.css'

function App() {

  const [bill,setBill] = useState(0);
  const [tipPercent,setTipPercent] = useState(); 

  return (
    <div className='app-container'>
       <div className='header'>Tip Calc</div>
       <div className='card'>
        <BillInput bill={bill} setBill={setBill} />
        <TipSelector tipPercent={tipPercent} setTipPercent={setTipPercent} />
       </div>
    </div>
  )
}

export default App
