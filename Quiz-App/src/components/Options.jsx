import { useQuiz } from "../context/QuizContext";
import { useEffect,useState } from "react";

const Options = () => {

  const {questions, currentQuestion,selectAnswer,selectedAnswer } = useQuiz()
  const [showCorrect, setShowCorrect] = useState(false)

  const q = questions[currentQuestion]

  const options = q.options

  useEffect(() => {

    if (selectedAnswer === null) return;

   const timer = setTimeout(() => {
      setShowCorrect(true)
    }, 1000)

    return () => clearTimeout(timer)

  }, [selectedAnswer, setShowCorrect])

 
   useEffect(() => {
      
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowCorrect(false)

    }, [currentQuestion,setShowCorrect])


  const getOptionsClass = (index) => {

    if(selectedAnswer === null) return 'border-gray-200 text-gray-700'
    if(index === q.answer) {
      if(selectedAnswer === q.answer) return 'border-green-500 text-green-600'
      if(showCorrect) return 'border-green-500 text-green-600'
    }
    if(selectedAnswer === index  ) return 'border-red-500 text-red-600'

    return 'border-gray-200 text-white-700 opacity-40'
  }
   

 


 
  return (
    <div className="mt-12 flex flex-col gap-3 w-full mb-3">
      {options.map((option,index) => {

        return (
          <button
           disabled={selectedAnswer !== null}
            key={option}
             className={`border-2   rounded-xl px-4 py-3 text-left font-medium  shadow-sm 
              ${getOptionsClass(index)}
             ` }


           onClick={() => 
            selectAnswer(index)
             
           }
            
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
