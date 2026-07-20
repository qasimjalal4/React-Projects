import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import * as currencyHook from './hooks/useCurrencyInfo'

 

vi.mock('./hooks/useCurrencyInfo', () => ({

  useCurrencyInfo: vi.fn()
}))

 


describe('App', () => {

  function setup() {

    render(<App />)

    const user = userEvent.setup()

    return {
      user
    }
  }


  test('renders initial UI', () => {

    setup()

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


  test('Convert button is disabled initially',  () => {
 

    setup()

    const button = screen.getByRole('button', {
      name: 'Convert'
    })

    expect(button).toBeDisabled()
    
  })


  test('Convert button is enabled after entering valid amount', async () => {

    const {user} = setup()

    const input = screen.getByRole('spinbutton')

    await user.type(input, '10')

    expect(input).toHaveValue(10)

    const button = screen.getByRole('button', {
      name: '/convert/i'
    })

    expect(button).toBeEnabled()
  })


  test('swap currency selectors', async () => {

   const { user } = setup()

   const selectors = screen.getAllByRole('combobox')

   const fromSelect = selectors[0]
   const toSelect = selectors[1]

   expect(fromSelect).toHaveValue('USD')
   expect(toSelect).toHaveValue('PKR')

   const button = screen.getByRole('button', {
    name: 'Swap'
   })

   await user.click(button)

   expect(fromSelect).toHaveValue('PKR')
   expect(toSelect).toHaveValue('USD')
  })
  
  test('converts USD to PKR', async () => {

    currencyHook.useCurrencyInfo.mockReturnValue({
      PKR: 280
    })

    const { user } = setup()

     const input = screen.getByRole('spinbutton')

     await user.type(input, '2')

     const button = screen.getByRole('button', {
      name: 'Convert'
     })

     await user.click(button)

     expect(screen.getByText('2 USD = 560.00 PKR')).toBeInTheDocument()
    
  })

})