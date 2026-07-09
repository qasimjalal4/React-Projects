import * as githubHook from "./Hooks/useGithubUser"
import { beforeEach, describe, expect, test,vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
 

vi.mock('./Hooks/useGithubUser', () => ({
  useGithubUser: vi.fn()
}))

describe('App', () => {


beforeEach(() => {
  githubHook.useGithubUser.mockReturnValue({
      user: null,
      isLoading: false,
      error: null
    })
})  

 function setup() {

  const user = userEvent.setup()

  render(<App />)

  return {
    user
  }
 }


  test('renders the search textbox', () => {

  setup()   

   const input = screen.getByRole('textbox')
   expect(input).toBeInTheDocument()

  })

  test('renders the Search button', () => {

    setup()

   const button = screen.getByRole('button', {
    name: 'Search'
   })

   expect(button).toBeInTheDocument()
  })
  

  test('renders default profile message', () => {

    setup()

   expect(screen.getByText('Enter a Github username')).toBeInTheDocument()
  })


  test('allows the user to type in search box', async () => {

    const {user} = setup()

    const input = screen.getByRole('textbox')

    await user.type(input,'octocat')

    expect(input).toHaveValue('octocat')
  })


  test('Showing alert message for empty input', async () => {

    const {user} = setup()

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
 

    const button = screen.getByRole('button', {
      name: 'Search'
    })

    await user.click(button)

     

    expect(alertSpy).toHaveBeenCalled()
    expect(alertSpy).toHaveBeenCalledTimes(1)
    expect(alertSpy).toHaveBeenCalledWith('Enter username!')

    alertSpy.mockRestore()
  })

  test('shows loading message', () => {

    githubHook.useGithubUser.mockReturnValue({
      user: null,
      isLoading: true,
      error: null
    })


    setup()
    

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })


  
})