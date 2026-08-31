import { describe, expect, test, vi, } from "vitest";
import QuizApp from './QuizApp'
import { render } from "@testing-library/react";
import { useQuiz } from "../context/QuizContext";

vi.mock('../context/QuizContext', () => ({

  useQuiz: vi.fn()
}))


vi.mock('./WelcomeScreen', () => ({
  default: () => <div>WelcomeScreen</div>
}))

vi.mock('./QuizScreen', () => ({
  default: () => <div>QuizScreen</div>
}))

vi.mock('./ResultScreen', () => ({
  default: () => <div>ResultScreen</div>
}))



describe('Quiz App', () => {

  test('renders WelcomeScreen when game status is welcome', () => {

    useQuiz.mockReturnValue({
      gameStatus: 'welcome'
    })

    render(<QuizApp />)

    expect(screen.getByText('WelcomeScreen')).toBeInTheDocument()
  })


  test('renders QuizScreen when game status is playing', () => {

    useQuiz.mockReturnValue({
      gameStatus: 'playing'
    })

    render(<QuizApp />)

    expect(screen.getByText('QuizScreen')).toBeInTheDocument()
  })


  


  test('renders ResultScreen when game status is finished', () => {

    useQuiz.mockReturnValue({
      gameStatus: 'finished'
    })

    render(<QuizApp />)

    expect(screen.getByText('ResultScreen')).toBeInTheDocument()


  })
})