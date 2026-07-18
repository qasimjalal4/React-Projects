import { createContext, useContext } from "react";


export const ExpenseContext = createContext()

export function useExpense() {

  return useContext(createContext) 
}