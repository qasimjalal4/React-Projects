import { useQuiz } from "../context/QuizContext";


const Options = () => {

  const {questions, currentQuestion} = useQuiz()

  const q = questions[currentQuestion]

 const options = q.options

  return (
    <div className="mt-12 flex flex-col gap-3 w-full mb-3">
      {options.map((option) => {
        return (
          <button
            key={option}
            className="border-2 border-gray-200 rounded-xl px-4 py-3 text-left font-medium text-gray-700 shadow-sm "
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
