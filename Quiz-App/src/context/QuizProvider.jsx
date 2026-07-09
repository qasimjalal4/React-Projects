import { QuizContext } from "./QuizContext";
import { questions } from "../data/quizQuestions";
import { useState } from "react";



export function QuizProvider({children}) {

  const [gameStatus, setGameStatus] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
 

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

  const selectAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setSelectedAnswer(index)
      setScore(prev => prev + 1)
    } else {
      setSelectedAnswer(index)
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
      restartQuiz,
      selectAnswer,
      selectedAnswer,
      score,
      
    }}>
      {children}
    </QuizContext.Provider>

  )
}

 