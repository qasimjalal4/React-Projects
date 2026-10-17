import {beforeEach, describe, expect, test, vi} from 'vitest'
import Options from './Options'
import { useQuiz } from '../context/QuizContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


vi.mock('../context/QuizContext', () => {

  vi.fn()
})



describe('Options', () => {

  let questions;

    beforeEach(() => {

      questions = [
        {
          category: 'Technology',
          question: 'What does CSS stand for?',
          options: [
            'Computer Style Sheets',
            'Creative Style Syntax',
            'Cascading Style Sheets',
            'Colorful Style Sheets'
          ],
          answer: 2
        },
        {
          category: 'Technology',
          question: 'Which company created React?',
          options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
          answer: 1
        }
      ]
    })

     

  test('render all options' , () => {

    const selectAnswer = vi.fn();

    useQuiz.mockReturnValue({
     currentQuestion: 0,
     questions: questions,
     selectAnswer: selectAnswer,
     selectedAnswer: null      
    })

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4)

  })

 
})