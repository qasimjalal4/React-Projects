import { useQuiz } from "../context/QuizContext"
import WelcomeScreen from "./WelcomeScreen"
import QuizScreen from "./QuizScreen"
import ResultScreen from "./ResultScreen"
 

const QuizApp = () => {

    const {gameStatus} = useQuiz();

    if (gameStatus === 'welcome') return <WelcomeScreen />
    if (gameStatus === 'playing') return <QuizScreen />
    if (gameStatus === 'finished') return <ResultScreen />
  }


export default QuizApp  