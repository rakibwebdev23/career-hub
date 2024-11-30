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
import Statistics from './components/Statistics/Statistics.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import UserProvider from './provider/UserProvider/UserProvider.jsx';
import PrivateRouter from './components/PrivateRouter/PrivateRouter.jsx';
import Job from './components/Job/Job.jsx';


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
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
        loader: ({props}) => fetch(`http://localhost:5000/jobs/${props.id}`)
      },
      {
        path: '/jobs/:id',
        element: <PrivateRouter><Job></Job></PrivateRouter>,
        loader: ({props}) => fetch(`http://localhost:5000/jobs/${props.id}`)
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
    <div className='max-w-full mx-auto mt-2'>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  </React.StrictMode>,
)
