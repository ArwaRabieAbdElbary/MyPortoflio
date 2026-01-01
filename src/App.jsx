import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    }
    ,
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" 
    />
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
