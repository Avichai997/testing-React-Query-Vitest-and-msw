import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Home } from '@/pages'

const queryClient = new QueryClient()

const IS_DEV = import.meta.env.DEV

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />

      {IS_DEV && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}
