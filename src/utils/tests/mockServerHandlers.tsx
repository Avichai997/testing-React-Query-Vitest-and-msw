import { rest } from 'msw'

import type { IUser } from '@/services/hooks/useUsers.test/IUser'
import { usersMock } from '@/utils/tests/usersMock'

export const mockServerHandlers = [
  rest.get('*/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<IUser[]>(usersMock))
  }),
]
