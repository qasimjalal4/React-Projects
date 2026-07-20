import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useCurrencyInfo } from "./useCurrencyInfo";



describe('useCurrencyInfo', () => {

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })


  test('returns empty object initially', () => {

    const {result} = renderHook(() => useCurrencyInfo("USD"))

    expect(result.current).toEqual({})
  })


  test('returns exchange rates after fetch', async () => {

    fetch.mockResolvedValue({
     json: async () => ({
      rates: {
       PKR: 280,
       EUR: 0.92,
      },
     }),
    });

    const {result} = renderHook(() => useCurrencyInfo('USD'))


   await waitFor(() => {
     expect(result.current).toEqual({
        PKR: 280,
        EUR: 0.92,     
      })

    })

  })
})