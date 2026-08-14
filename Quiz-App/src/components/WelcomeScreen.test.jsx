import { describe, test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useQuiz } from "../context/QuizContext";
import WelcomeScreen from "./WelcomeScreen";
import userEvent from "@testing-library/user-event";


vi.mock('../context/QuizContext', () => ({

  useQuiz: vi.fn()
}))


describe('WelcomeScreen', () => {

  test('renders welcome screen content', () => {

    useQuiz.mockReturnValue({
      startQuiz: vi.fn()
    })

    render(<WelcomeScreen />)

     expect(
      screen.getByRole("heading", {
        name: "Quiz App"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("10")
    ).toBeInTheDocument();

    expect(
      screen.getByText("QUESTIONS")
    ).toBeInTheDocument();

    expect(
      screen.getByText("15s")
    ).toBeInTheDocument();

    expect(
      screen.getByText("PER QUESTION")
    ).toBeInTheDocument();

    expect(
      screen.getByText("4")
    ).toBeInTheDocument();

    expect(
      screen.getByText("OPTIONS")
    ).toBeInTheDocument();

    expect(screen.getByRole('button', {
      name: /Start Quiz/i
    })).toBeInTheDocument()

  })


  test('calls startQuiz when Start Quiz is clicked',  async () => {

    const startQuiz = vi.fn()

    useQuiz.mockReturnValue({
      startQuiz
    })

    render(<WelcomeScreen />)

    const user = userEvent.setup()

    const button = screen.getByRole('button', {
      name: 'Start Quiz'
    })

    await user.click(button)

    expect(startQuiz).toHaveBeenCalledTimes(1)
  })
})