import { beforeEach, describe, expect, test,vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";



describe('App', () => {

  let user;

  beforeEach(() => {
    render(<App />)
    user = userEvent.setup()
  })

  test('renders the search textbox', () => {

   const input = screen.getByRole('textbox')
   expect(input).toBeInTheDocument()

  })

  test('renders the Search button', () => {

   const button = screen.getByRole('button', {
    name: 'Search'
   })

   expect(button).toBeInTheDocument()
  })
  

  test('renders default profile message', () => {

   expect(screen.getByText('Enter a Github username')).toBeInTheDocument()
  })


  test('allows the user to type in search box', async () => {

    const input = screen.getByRole('textbox')

    await user.type(input,'octocat')

    expect(input).toHaveValue('octocat')
  })


  test('Showing alert message for empty input', async () => {

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const input = screen.getByRole('textbox')

    expect(input).toHaveValue('')

    const button = screen.getByRole('button', {
      name: 'Search'
    })

    await user.click(button)

     

    expect(alertSpy).toHaveBeenCalled()
    expect(alertSpy).toHaveBeenCalledTimes(1)
    expect(alertSpy).toHaveBeenCalledWith('Enter username!')

    alertSpy.mockRestore()
  })
})