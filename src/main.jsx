import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
// import SeachCollege from './Component/SeachCollege';
import HomePage from './Pages/HomePage/HomePage';
import College from './Pages/College/College';
import Admission from './Pages/Admission/Admission';
import MyCollege from './Pages/MyCollege/MyCollege';
import CollegeDetails from './Component/CollegeDetails';
import Login from './Shared/Login';
import Register from './Shared/Register';
import AuthProvider from './Providers/AuthProvider';
import Enrollnow from './Pages/Admission/Enrollnow';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import ErrorPage from './Component/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,

      },
      {
        path: "/college",
        element: <College></College>,

      },
      {
        path: "/admission",
        element: <Admission></Admission>,

      },
      {
        path: "/MyCollege",
        element: <MyCollege></MyCollege>,

      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/enroll",
        element: <Enrollnow></Enrollnow>,
      },
      {
        path: '/:id',
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://college-service-server-theta.vercel.app/menu/${params.id}`)
      },
      {
        path: 'college/:id',
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://college-service-server-theta.vercel.app/college/${params.id}`)
      }


    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
