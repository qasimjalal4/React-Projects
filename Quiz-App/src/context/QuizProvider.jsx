import { QuizContext } from "./QuizContext";
import { useState } from "react";



export function QuizProvider({children}) {

  const [gameStatus, setGameStatus] = useState('playing')

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

 