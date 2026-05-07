import './ResultDisplay.css'

export function ResultDisplay({tipAmount,totalBill}) {
  return (
    <>
     <div className='tip-amount-container'>
      <span>Tip Amount: </span>
      <span className='tip-amount'>${tipAmount.toFixed(2)}</span>
     </div>
     <div className='total-bill-container'>
      <span>Total Bill: </span>
      <span className='total-bill'>${totalBill.toFixed(2)}</span>
     </div>
    </>
  )
}