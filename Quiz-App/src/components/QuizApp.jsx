import { useQuiz } from "../context/QuizContext"
import WelcomeScreen from "./WelcomeScreen"
import QuizScreen from "./QuizScreen"
 

const QuizApp = () => {

    const {gameStatus} = useQuiz();

    if (gameStatus === 'welcome') return <WelcomeScreen />
    if (gameStatus === 'playing') return <QuizScreen />
  }


export default QuizApp  