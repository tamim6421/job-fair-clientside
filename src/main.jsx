import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-[1200px] mx-auto'>
<React.StrictMode>
<QueryClientProvider client={queryClient}>
<AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    </QueryClientProvider>
   
  </React.StrictMode>
</div>
)
