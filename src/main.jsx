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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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

      }


    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
