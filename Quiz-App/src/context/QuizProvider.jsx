/* eslint-disable react-hooks/set-state-in-effect */
import { QuizContext } from "./QuizContext";
import { questions } from "../data/quizQuestions";
import { useCallback, useEffect, useState } from "react";



export function QuizProvider({children}) {

  const [gameStatus, setGameStatus] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15) 

  const startQuiz = () => {
    setGameStatus('playing')
  }

  const nextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setGameStatus('finished')
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
    }
  }

 const selectAnswer = useCallback((index) => {

    setSelectedAnswer(index)

    if (index === questions[currentQuestion].answer) {
      setScore(prev => prev + 1)
    }

 }, [currentQuestion])

   
 
  const restartQuiz = () => {
    setCurrentQuestion(0)
    setGameStatus('playing')
    setSelectedAnswer(null)
    setScore(0)
    setTimeLeft(15)
  }
 

  useEffect(() => {
    if (gameStatus !== 'playing') return;
    if (selectedAnswer !== null) return;

    setTimeLeft(15)

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if(prev <= 1) {
          clearInterval(timer)
          selectAnswer(questions[currentQuestion].answer)
          return 0
        }

       return prev - 1
      })

    }, 1000)

      return () => {
        clearInterval(timer)
      }
    
  }, [gameStatus,currentQuestion, selectedAnswer, selectAnswer])


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
      timeLeft     
    }}>
      {children}
    </QuizContext.Provider>

  )
}

 