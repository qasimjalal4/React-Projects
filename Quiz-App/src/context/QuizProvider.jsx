import { QuizContext } from "./QuizContext";
import { questions } from "../data/quizQuestions";
import { useState } from "react";



export function QuizProvider({children}) {

  const [gameStatus, setGameStatus] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const startQuiz = () => {
    setGameStatus('playing')
  }

  const nextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setGameStatus('finished')
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setGameStatus('playing')
  }

  return (
    <QuizContext.Provider value={{
      gameStatus,
      startQuiz,
      questions,
      currentQuestion,
      nextQuestion,
      restartQuiz
    }}>
      {children}
    </QuizContext.Provider>

  )
}

 