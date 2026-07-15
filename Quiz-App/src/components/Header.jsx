import { useQuiz } from "../context/QuizContext"


const Header = () => {

  const {currentQuestion, questions, timeLeft} = useQuiz()



  return (
    <div className="flex justify-between items-center mb-4">
      <p className="font-bold text-gray-500 text-[15px]">
        Question <span className="text-indigo-600">{currentQuestion + 1}
       </span> of <span className="text-indigo-600">{questions.length}</span>
      </p>
      <span className="text-indigo-600 border-2 text-base font-bold border-indigo-600 py-[3px] px-4 rounded-3xl mb-1
      ">{timeLeft}s</span>
    </div>
  )
}

export default Header