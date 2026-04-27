export function TipSelector({tipPercent,setTipPercent}) {

  const tipOptions = [10,15,20,25];




  return (
    <div className="tip-row">
     {tipOptions.map((tip) => {
      return (
        <button
         className={tipPercent === tip ? 'active': ''}
         key={tip} 
         onClick={() => {
          setTipPercent(tip)
         }}
        >{tip}%
        </button>
      )
     })}
    </div>
  )
}