import { QuizContext } from "./QuizContext";
import { questions } from "../data/quizQuestions";
import { useState } from "react";



export function QuizProvider({children}) {

  const [gameStatus, setGameStatus] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const startQuiz = () => {
    setGameStatus('playing')
  }

  return (
    <QuizContext.Provider value={{
      gameStatus,
      startQuiz,
      questions,
      currentQuestion
    }}>
      {children}
    </QuizContext.Provider>

  )
}

 