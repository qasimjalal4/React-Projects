import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";


describe('App', () => {

  beforeEach(() => {
    render(<App />)
  })

  test('renders the search textbox', () => {

   const input = screen.getByRole('textbox')
   expect(input).toBeInTheDocument()

  })

  test('rneders the Search button', () => {

   const button = screen.getByRole('button', {
    name: 'Search'
   })

   expect(button).toBeInTheDocument()
  })
  

  test('renders default profile message', () => {

   expect(screen.getByText('Enter a Github username')).toBeInTheDocument()
  })
})