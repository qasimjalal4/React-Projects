import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


describe('App', () => {

  let user;

  beforeEach(() => {
    render(<App />)

    user = userEvent.setup()
  })


  test('renders initial UI', () => {

  expect(screen.getByRole('heading', {
      name: 'Currency Converter'
    })).toBeInTheDocument()

  expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  
  const selectors = screen.getAllByRole('combobox')

  expect(selectors).toHaveLength(2)

  expect(screen.getByRole('button', {
    name: 'Swap'
  })).toBeInTheDocument()

  expect(screen.getByRole('button', {
    name: 'Convert'
  })).toBeInTheDocument()

  expect(screen.getByText('Enter amount to convert')).toBeInTheDocument()
  })


  test('Convert button is disable initially', () => {

    const button = screen.getByRole('button', {
      name: 'Convert'
    })

    expect(button).toBeDisabled() 
  })

  test("enables Convert button after entering a valid amount", async () => {

    const input = screen.getByRole('spinbutton')

    await user.type(input, "100")

    expect(input).toHaveValue(100)

    const button = screen.getByRole('button', {
      name: 'Convert'
    })

    expect(button).toBeEnabled()

  })
})