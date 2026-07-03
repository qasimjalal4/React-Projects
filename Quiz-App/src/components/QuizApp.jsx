import WelcomeScreen from "./components/WelcomeScreen"
import QuizScreen from "./components/QuizScreen"
import { useQuiz } from "./context/QuizContext"

const QuizApp = () => {

    const {gameStatus} = useQuiz();

    if (gameStatus === 'welcome') return <WelcomeScreen />
    if (gameStatus === 'playing') return <QuizScreen />
  }


export default QuizApp  