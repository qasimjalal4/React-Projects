import CurrencySelector from "./components/CurrencySelector"
import { useCurrencyInfo } from "./hooks/useCurrencyInfo"
import { useState } from "react"

 const options = ['PKR','USD','INR','EUR','GBP','JPY']

function App() {
  
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('USD')
  const [to , setTo] = useState('PKR')

  const currencyData = useCurrencyInfo(from)

  

  return (
    <div className="bg-white w-96 p-8 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-8 pt-2">Currency Converter</h1>
      <label>Amount</label>
      <input
        onChange={(event) => setAmount(event.target.value)}
        value={amount}
       placeholder="Enter amount"
       className="w-full p-2 mt-2 mb-3 rounded-md border border-[#ddd]"
      />

       <CurrencySelector label="From" value={from} options={options} onChange={setFrom} />
       <CurrencySelector label="To" value={to} options={options} onChange={setTo} />
      <button
       className="w-full p-2 mt-2 mb-3 border-none bg-[#10b981] text-white rounded-md cursor-pointer
       hover:bg-[#059669] transition
       "

       onClick={handleSwap}
      >
        Swap
      </button>
      <button
       className="w-full p-2 mt-2 mb-3 border-none bg-[#2563eb] text-white rounded-md cursor-pointer
       hover:bg-[#1d4ed8] transition
       "
      >
        Convert
      </button>
      <p className="text-center mt-3 font-bold">Enter amount to convert</p>
    </div>
  )
}

export default App
