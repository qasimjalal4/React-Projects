import { QuizProvider } from "./context/QuizProvider"
import QuizApp from "./components/QuizApp"

function App() {
  
 

  return (
    <QuizProvider>
       <QuizApp />
    </QuizProvider>
  )
}

export default App
