import { useEffect, useState } from "react";

 export function useCurrencyInfo(currency) {

  const [currencyData ,setCurrencyData] = useState({})
  

  useEffect(() => {


    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      setCurrencyData(data.conversion_rates || {})
    })
    
  },[currency])

  return currencyData

}