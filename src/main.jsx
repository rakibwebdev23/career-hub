import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import UserProvider from './provider/UserProvider/UserProvider.jsx';
import PrivateRouter from './components/PrivateRouter/PrivateRouter.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/job/:id',
        element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <div className='w-full mx-auto mt-2'>
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  </React.StrictMode>,
)
