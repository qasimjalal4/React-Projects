import { BillInput } from './components/BillInput'
import { TipSelector } from './components/TipSelector';
import { ResultDisplay } from './components/ResultDisplay';
import { useState } from 'react';
import './App.css'

function App() {

  const [bill,setBill] = useState('');
  const [tipPercent,setTipPercent] = useState(0.00); 

  const tipAmount = (parseFloat(bill) || 0) * (tipPercent/100);
  const totalBill =(parseFloat(bill) || 0) + tipAmount;
 
  return (
    <div className='app-container'>
       <div className='header'>Tip Calc</div>
       <div className='card'>
        <BillInput bill={bill} setBill={setBill} />
        <TipSelector tipPercent={tipPercent} setTipPercent={setTipPercent} />
        <ResultDisplay tipAmount={tipAmount} totalBill={totalBill} />
       </div>
    </div>
  )
}

export default App
