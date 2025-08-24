import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './Components/Root/Root'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import BookDetail from './Components/BookDetail/BookDetail'
import ListedBooks from './Components/ListedBooks/ListedBooks'
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        loader: () => fetch('/booksData.json'),
        element: <BookDetail></BookDetail>
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/booksData.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
