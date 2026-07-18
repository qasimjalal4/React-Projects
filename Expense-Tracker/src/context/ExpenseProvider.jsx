import { ExpenseContext } from "./ExpenseContext";

export function ExpenseProvider({childern}) {

  return (
    <ExpenseContext.Provider value={{
      
    }}>
      {childern}
    </ExpenseContext.Provider>
  )
}
