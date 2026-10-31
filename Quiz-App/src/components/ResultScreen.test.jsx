import { describe,expect,test,vi } from 'vitest'
import { useQuiz } from '../context/QuizContext'
import ResultScreen from '../components/ResultScreen'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


vi.mock('../context/QuizContext', () => ({
  useQuiz: vi.fn()
}))


describe('ResultScreen', () => {

  test('Displays the score correctly', () => {

    useQuiz.mockReturnValue({
      restartQuiz: vi.fn(),
      score: 8,
      questions: new Array(10)
    })

    render(<ResultScreen />)


    expect(screen.getByText('8/10')).toBeInTheDocument()
  })


  test('displays wrong correctly', () => {

    useQuiz.mockReturnValue({
      restartQuiz: vi.fn(),
      score: 8,
      questions: new Array(10)
    })

    render(<ResultScreen />)

    
    expect(screen.getByText('2')).toBeInTheDocument()
  })


  test('displays accuracy correctly', () => {
    useQuiz.mockReturnValue({
      restartQuiz: vi.fn(),
      score: 8,
      questions: new Array(10)
    })

    render(<ResultScreen />)

    expect(screen.getByText('80%')).toBeInTheDocument()
  })


  test('displays Great Job when accuracy is 80%', () => {

    useQuiz.mockReturnValue({
      restartQuiz: vi.fn(),
      score: 8,
      questions: new Array(10)
    })

    render(<ResultScreen />)

    expect(screen.getByText('Great Job!')).toBeInTheDocument()
  })


  test('calls restartQuiz when Play Again is clicked', async () => {


    const restartQuiz = vi.fn()

    useQuiz.mockReturnValue({
      restartQuiz,
      score: 8,
      questions: new Array(10)
    })

    const user = userEvent.setup()

    render(<ResultScreen />)

    const playAgainBtn = screen.getByRole('button', {
      name: 'Play Again'
    })

    await user.click(playAgainBtn)

    expect(restartQuiz).toHaveBeenCalled()

  })

})