import { useQuiz } from "../context/QuizContext"


const Header = () => {

  const {currentQuestion, questions} = useQuiz()

  return (
    <div className="flex justify-between items-center mb-3">
      <p className="font-bold text-gray-500 text-[15px]">
        Question <span className="text-indigo-600">{currentQuestion + 1}
       </span> of <span className="text-indigo-600">{questions.length}</span>
      </p>
    </div>
  )
}

export default Header