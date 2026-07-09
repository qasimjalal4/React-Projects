import { useQuiz } from "../context/QuizContext";

const NextButton = () => {
  const { nextQuestion, currentQuestion, questions, selectedAnswer } =
    useQuiz();

  return (
    <div className="w-full flex justify-center items-center h-10 mt-[10px]  ">
      {selectedAnswer !== null && (
        <button
          className="bg-indigo-600 text-white font-semibold text-lg w-2/3  rounded-lg  
     hover:opacity-90 active:opacity-80 transition-opacity h-full 
     "
          onClick={nextQuestion}
        >
          {currentQuestion + 1 >= questions.length
            ? "See Results"
            : "Next Question"}
        </button>
      )}
    </div>
  );
};

export default NextButton;
