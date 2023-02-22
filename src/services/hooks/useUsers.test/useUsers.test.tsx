import { renderHook } from '@testing-library/react-hooks'
import { rest } from 'msw'
import { describe, it } from 'vitest'

import { createQueryProviderWrapper } from '@/utils/tests/createQueryProviderWrapper'
import { mockServer } from '@/utils/tests/mockServerSetup'

import { useUsers } from './useUsers'

describe('useUsers', () => {
  it('should return users successfully', async () => {
    const { result, waitFor } = renderHook(() => useUsers(), {
      wrapper: createQueryProviderWrapper(),
    })

    await waitFor(() => result.current.isSuccess, { timeout: 10000 })

    const user = result.current.data?.[0]

    // user data comes from usersMock.tsx
    expect(user?.login).toBe('user-login-1')
  })

  it('should return error when fetching users fails', async () => {
    mockServer.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    const { result, waitFor } = renderHook(() => useUsers(), {
      wrapper: createQueryProviderWrapper(),
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeDefined()
  })
})
