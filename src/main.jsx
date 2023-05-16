import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import ViewCoffee from './components/ViewCoffee/ViewCoffee.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://y-tanjinahakim.vercel.app/coffee')
  },
  {
    path:'addcoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'updatecoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://y-tanjinahakim.vercel.app/coffee/${params.id}`)
  },
  {
    path:'viewCoffee/:id',
    element:<ViewCoffee></ViewCoffee>,
    loader:({params})=>fetch(`https://y-tanjinahakim.vercel.app/coffee/${params.id}`)
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
