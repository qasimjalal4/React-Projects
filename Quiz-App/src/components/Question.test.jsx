import { describe, test, vi, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { useQuiz } from "../context/QuizContext";
import Question from "./Question";

 


vi.mock('../context/QuizContext', () => ({

  useQuiz: vi.fn()
}))
 

describe('Question', () => {

  let questions;

  beforeEach(() => {

     questions = [
        {
          category: 'Technology',
          question: 'What does CSS stand for?',
        }, {
          category: 'Technology',
          question: 'Which company created React?',
        }
      ]
  })


  test('renders Quetion 1 category and text correctly', () => {

    useQuiz.mockReturnValue({
      currentQuestion: 0,
      questions: questions
      
    })

    render(<Question />)

    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('What does CSS stand for?')).toBeInTheDocument()

  })



  test('renders Quetion 2 category and text correctly', () => {

    useQuiz.mockReturnValue({
      currentQuestion: 1,
      questions: questions
      
    })

    render(<Question />)

    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('What company created React?')).toBeInTheDocument()

  })
})