import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { api } from '@/services/api'
import { IUser } from '@/services/hooks/useUsers.test/IUser'

export const getUsers = async () => {
  const { data: users } = await api.get<IUser[]>('/users')

  return users
}

export const useUsers = (
  options: UseQueryOptions<IUser[], unknown, IUser[], ['users']> = {}
) => {
  return useQuery(['users'], getUsers, {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  })
}
