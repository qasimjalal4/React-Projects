import { useQuiz } from "../context/QuizContext"


const WelcomeScreen = () => {

  const {startQuiz} = useQuiz()

  return (

     <div className="bg-white shadow-xl w-[430px] px-9 pt-16 pb-10 rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Quiz App</h1>
      <p className="text-center text-gray-500 leading-7 mb-14">
        Test your knowledge across different topics. Answer quickly - each question has a 15 second timer!
      </p>
      <div className="grid grid-cols-3 gap-3 mb-10">
        <div className="flex flex-col justify-center items-center bg-gray-50 border border-gray-200 gap-1 px-1 py-3 rounded-xl ">
          <span className="text-gray-900 text-2xl font-semibold">10</span>
          <span className="text-gray-600 text-sm">QUESTIONS</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-50 border border-gray-200 gap-1 px-1 py-3 rounded-xl ">
          <span className="text-gray-900 text-2xl font-semibold">15s</span>
          <span className="text-gray-600 text-sm text-center">PER QUESTION</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-50 border border-gray-200 gap-1 px-1 py-3 rounded-lg">
          <span className="text-gray-900 text-2xl font-semibold">4</span>
          <span className="text-gray-600 text-sm">OPTIONS</span>
        </div>
      </div>
      <button className="bg-indigo-600 text-white font-semibold w-2/3 py-[10px] rounded-xl mt-2 cursor-pointer
       hover:bg-indigo-700
      "
      onClick={startQuiz}
      >
        Start Quiz
      </button>
     </div>
  
  )
}

export default WelcomeScreen