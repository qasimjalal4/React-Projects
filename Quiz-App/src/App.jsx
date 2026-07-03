import { QuizProvider } from "./context/QuizProvider"
import WelcomeScreen from "./components/WelcomeScreen"

function App() {
  

  return (
    <QuizProvider>
      <WelcomeScreen />
    </QuizProvider>
  )
}

export default App
