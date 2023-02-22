import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { beforeAll, afterEach, afterAll } from 'vitest'

import { mockServerHandlers } from '@/utils/tests/mockServerHandlers'

export const mockServer = setupServer(...mockServerHandlers)

// Establish API mocking before all tests.
beforeAll(() => mockServer.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => mockServer.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => mockServer.close())
