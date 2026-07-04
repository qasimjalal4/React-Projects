import { useQuiz } from "../context/QuizContext"


const NextButton = () => {

  const {nextQuestion} = useQuiz()

  return (
   <div className="w-full flex justify-center items-center"> 
    <button
     className="bg-indigo-600 text-white font-semibold text-lg w-2/3 mt-6 rounded-lg h-10
     hover:opacity-90 active:opacity-80 transition-opacity
     "
     onClick={nextQuestion}
    >Next</button>
   </div> 
  )
}

export default NextButton