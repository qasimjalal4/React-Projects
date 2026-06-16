

const CurrencySelector = ({label,options,value,onChange}) => {
  return (
    <>
     <label>{label}</label>
     <select value={value} onChange={event => onChange(event.target.value)}
      className="w-full p-2 mt-2 mb-3 rounded-md border border-[#ddd]"
     >
      {options.map((option) => 
          (
          <option key={option} value={option}>{option}</option>
         )
      )}
     </select>
    </>
  )
}

export default CurrencySelector