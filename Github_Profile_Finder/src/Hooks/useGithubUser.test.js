import { describe, test, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useGithubUser } from "./useGithubUser";


describe('useGithubUser', () => {

  test('renders initial state', () => {
  
    const {result} = renderHook(() => 
     useGithubUser("")
    )

    expect(result.current.user).toBeNull()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  
  })

  test('renders github user successfully', async () => {
  vi.stubGlobal('fetch', vi.fn())

  fetch.mockResolvedValue({
    ok: true,
    json: async () => ({
      login: 'octocat',
      name: 'The Octocat',
    }),
  })

  const { result } = renderHook(() => useGithubUser('octocat'))

  await waitFor(() => {
    expect(result.current.user.name).toBe('The Octocat')
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  vi.unstubAllGlobals()
})


test("shows 'User Not Found!' when github returns 404",  async () => {

  vi.stubGlobal("fetch", vi.fn())

  fetch.mockResolvedValue({
    ok: false,
    json: async () => ({})
  })

  const {result} = renderHook(() => useGithubUser('Hello'))

  await waitFor(() => {
    expect(result.current.name).toBeNull()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe('User Not Found!')
  })

    vi.unstubAllGlobals()
})


  test('shows an error when fetch fails', async () => {

    vi.stubGlobal("fetch", vi.fn())

    fetch.mockRejectedValue()
     new Error('Network Error!')

     const {result} = renderHook(() => useGithubUser('octocat'))

     await waitFor(() => {
      expect(result.current.name).toBeNull()
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBe('Network Error!')
     })
  })

    vi.unstubAllGlobals()
})