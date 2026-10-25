import { describe,test,expect, vi } from "vitest";
import { useQuiz } from "../context/QuizContext";
import NextButton from '../components/NextButton' 
import { queryByRole, render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock('../context/QuizContext', () => ({

  useQuiz: vi.fn()
}))

describe('Next Button', () => {


  test('no Next Button is shown on screen when an option is not clicked', () => {

    useQuiz.mockReturnValue({
      nextQuestion: vi.fn(),
      curentQuestion: 0,
      questions: new Array(10),
      selectedAnswer: null
    })

    render(<NextButton />)

    expect(screen.queryByRole('button').not.toBeInTheDocument())

  })


  test('shows Next Button when an option is clicked', () => {

    
    useQuiz.mockReturnValue({
      nextQuestion: vi.fn(),
      curentQuestion: 0,
      questions: new Array(10),
      selectedAnswer: 2
    })


    render(<NextButton />)

    const button = screen.getByRole('button', {
      name: 'Next Button'
    })


    expect(button).toBeInTheDocument()
  })


  test('calls nextQuestion when Next Button is clicked', async () => {

    const nextQuestion = vi.fn();

    
    useQuiz.mockReturnValue({
      nextQuestion,
      curentQuestion: 0,
      questions: new Array(10),
      selectedAnswer: 2
    })

    const user = userEvent.setup();

    render(<NextButton />)

    const button = screen.getByRole('button', {
      name: 'Next Button'
    })

    
    await user.click(button)

    expect(nextQuestion).toHaveBeenCalled()
  })


  test('shows See Results when on last question', () => {

     useQuiz.mockReturnValue({
      nextQuestion: vi.fn(),
      currentQuestion: 9,
      questions: new Array(10),
      selectedAnswer: 2
    })


    render(<NextButton />)

    const button = screen.getByRole('button', {
      name: 'See Results'
    })


    expect(button).toBeInTheDocument();
  })

})