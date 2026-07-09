import { useQuiz } from "../context/QuizContext";

const ResultScreen = () => {

  const {restartQuiz,score,questions} = useQuiz();

  const total = questions.length
  const wrong = total - score
  const percent = Math.round((score / total) * 100)



  return (
    <div className="bg-white shadow-xl w-[430px] px-9 pt-12 pb-8 rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Keep Studying!</h1>
      <p className="text-gray-500 mb-12">Dont give up - try again!</p>

      <div className="bg-indigo-700 h-40 w-40 rounded-full flex flex-col justify-center items-center text-white mb-8">
        <span className="text-[40px] font-extrabold">{score}/10</span>
        <span className="text-sm">Score</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{score}</div>
          <div className="text-xs text-green-500 uppercase tracking-wide mt-1">
            Correct
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-red-500">{wrong}</div>
          <div className="text-xs text-red-400 uppercase tracking-wide mt-1">
            Wrong
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">{percent}%</div>
          <div className="text-xs text-indigo-400 uppercase tracking-wide mt-1">
            Accuracy
          </div>
        </div>
      </div>

      <button
        className="bg-indigo-600 text-white font-semibold text-lg w-2/3 mt-6 rounded-lg h-12
       hover:opacity-90 active:opacity-80 transition-opacity"
       onClick={restartQuiz}
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;
