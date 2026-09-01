import { describe,test,vi,expect } from "vitest";
import { useQuiz } from "../context/QuizContext";
import Header from "./Header";
import { render,screen } from "@testing-library/react";

vi.mock('../context/QuizContext', () => ({

  useQuiz: vi.fn()
}))



describe('Header', () => {

  test('renders Header content', () => {

    useQuiz.mockReturnValue({
      currentQuestion: 2,
      questions: new Array(10),
      timeLeft: 10
    })

    render(<Header />)

    expect(screen.getByText('10s')).toBeInTheDocument()
    expect(screen.getByText('Question 3 of 10')).toBeInTheDocument()

  })
})