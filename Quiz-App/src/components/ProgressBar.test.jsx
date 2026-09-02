import {describe, test, expect, vi} from 'vitest'
import ProgressBar from "./ProgressBar"
import { render, screen } from '@testing-library/react'
import { useQuiz } from '../context/QuizContext'


vi.mock('../context/QuizContext', () => ({

  useQuiz: vi.fn()
}))

describe('ProgressBar', () => {

  test('progress bar width is 50% for Question 5', () => {

    useQuiz.mockReturnValue({
      currentQuestion: 4,
      questions: new Array(10)
    })

    render(<ProgressBar />)

   const bar = screen.getByTestId('progress-bar')

   expect(bar).toHaveStyle({width: '50%'})

  })


  test('progress bar width is 10% for Question 1', () => {

    useQuiz.mockReturnValue({
      currentQuestion: 0,
      questions: new Array(10)
    })

    render(<ProgressBar />)

    const bar = screen.getByTestId('progress-bar')

    expect(bar).toHaveStyle({width: '10%'})
  })

  
})