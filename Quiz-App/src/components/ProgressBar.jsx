import { useQuiz } from "../context/QuizContext"

const ProgressBar = () => {

  const {currentQuestion, questions} = useQuiz()

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
     <div className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
      style={{ width: `${((currentQuestion + 1)/questions.length) * 100}%`}}
     ></div>
    </div>
  )
}

export default ProgressBar