 import Header from "./Header";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Options from "./Options";
import NextButton from "./NextButton";

const QuizScreen = () => {
  
  return (
    <div className="bg-white shadow-xl w-[430px] px-9 py-6 rounded-xl flex flex-col ">
 
     <Header />
     <ProgressBar />
     <Question /> 
     <Options />
     <NextButton />

    </div>
  )
}

export default QuizScreen