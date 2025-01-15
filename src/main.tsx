import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { ContextProvider } from './context/ContextProvider.tsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
              <App />
           </HelmetProvider>
        </QueryClientProvider>
    </ContextProvider>
  </StrictMode>,
)
