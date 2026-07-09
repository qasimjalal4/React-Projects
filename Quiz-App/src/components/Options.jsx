import { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";


const Options = () => {

  const {questions, currentQuestion,selectAnswer } = useQuiz()

  const q = questions[currentQuestion]

  const options = q.options
 
   
 


 
  return (
    <div className="mt-12 flex flex-col gap-3 w-full mb-3">
      {options.map((option,index) => {

        return (
          <button
            key={option}
             className={`border-2   rounded-xl px-4 py-3 text-left font-medium  shadow-sm 
          
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
