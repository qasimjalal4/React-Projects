import './BillInput.css'

export function BillInput({bill,setBill}) {

 

  function handleBillChange(event) {
    setBill(parseFloat(event.target.value) || 0)
  }

  return (
    <div className='input-container'>
      <span>Bill Amount</span>
      <input
       onChange={handleBillChange}
       value={bill}
       className='input-box'
       placeholder='0.00'
      />
    </div>
  )
}