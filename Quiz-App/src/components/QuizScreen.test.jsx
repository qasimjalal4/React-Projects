import { describe, expect, test, vi } from "vitest";
import QuizScreen from "./QuizScreen";
import { render, screen } from "@testing-library/react";

vi.mock('./Header', () => ({
  default: () => <div>Header</div>
}))

vi.mock('./ProgressBar', () => ({
  default: () => <div>ProgressBar</div>
}))

vi.mock('./Question', () => ({
  default: () => <div>Question</div>
}))

vi.mock('./Options', () => ({
  default: () => <div>Options</div>
}))

vi.mock('./NextButton', () => ({
  default: () => <div>NextButton</div>
}))


describe('QuizScreen', () => {

  test('renders all quiz components', () => {

    render(<QuizScreen />)

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('ProgressBar')).toBeInTheDocument()
    expect(screen.getByText('Question')).toBeInTheDocument()
    expect(screen.getByText('Options')).toBeInTheDocument()
    expect(screen.getByText('NextButton')).toBeInTheDocument()
  })
})