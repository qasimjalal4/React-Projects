import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";


describe('SearchBar', () => {

  let user;
  let input;
  let button;
  let setInputText;
  let  onSearch;

  beforeEach(() => {

    user = userEvent.setup();

    setInputText = vi.fn()
    onSearch = vi.fn()

    render(<SearchBar inputText="" setInputText={setInputText} onSearch={onSearch} />)

    input = screen.getByRole('textbox')
    button = screen.getByRole('button', {
      name: 'Search'
    })
  })

  test('renders textbox and search button', () => {
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

 test('calls onSearch when Search button is clicked', async () => {
  
  await user.click(button);

  expect(onSearch).toHaveBeenCalledTimes(1);
});

  
 test("calls setInputText while typing", async () => {

  await user.type(input,'octocat')

  expect(setInputText).toHaveBeenCalled()
  expect(setInputText).toHaveBeenLastCalledWith('octacat')

 })
})