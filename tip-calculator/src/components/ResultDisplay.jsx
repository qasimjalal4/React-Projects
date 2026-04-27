export function ResultDisplay({tipAmount,totalBill}) {
  return (
    <>
     <div>
      <span>Tip Amount: </span>
      <span>{tipAmount.toFixed(2)}</span>
     </div>
     <div>
      <span>Total Bill: </span>
      <span>{totalBill.toFixed(2)}</span>
     </div>
    </>
  )
}