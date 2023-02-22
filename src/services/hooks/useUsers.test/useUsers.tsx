import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { IUser } from '@/services/hooks/useUsers.test/IUser'

export const getUsers = async () => {
  const response = await fetch('https://api.github.com/users', {
    headers: {
      // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  })

  const resData = await response.json()

  return resData
}

export const useUsers = (
  options: UseQueryOptions<IUser[], unknown, IUser[], ['users']> = {}
) => {
  return useQuery(['users'], getUsers, {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  })
}
