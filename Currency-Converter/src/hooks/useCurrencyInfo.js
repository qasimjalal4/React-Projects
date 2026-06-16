import { useEffect, useState } from "react";

 export function useCurrencyInfo(currency) {

  const [currencyData ,setCurrencyData] = useState({})
  

  useEffect(() => {


    fetch(`https://v6.exchangerate-api.com/v6/26413cf71939f8a7856837c1/latest/${currency}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      setCurrencyData(data.rates || {})
    })
    
  },[currency])

  return currencyData

}