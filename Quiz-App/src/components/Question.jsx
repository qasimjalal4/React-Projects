import { useQuiz } from "../context/QuizContext";

const Question = () => {

    const {questions, currentQuestion} = useQuiz();
  
    const q = questions[currentQuestion]

  return (
    <div className="bg-white w-full rounded-2xl shadow-xl p-8 max-w-lg">
      <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
        {q.category}
      </span>
      <p className="text-xl font-bold text-gray-900 mt-4 leading-7">
       {q.question}
      </p>
    </div>
  )
}

export default Question