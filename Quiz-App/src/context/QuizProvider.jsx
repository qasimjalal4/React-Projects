import { QuizContext } from "./QuizContext";
import { useState } from "react";



export function QuizProvider({children}) {

  const [gameStatus, setGameStatus] = useState('welcome')

  const startQuiz = () => {
    setGameStatus('playing')
  }

  return (
    <QuizContext.Provider value={{
      gameStatus,
      startQuiz
    }}>
      {children}
    </QuizContext.Provider>

  )
}

 