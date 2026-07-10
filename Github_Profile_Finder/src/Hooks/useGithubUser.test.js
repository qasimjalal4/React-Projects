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
})