import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root ,{ loader as rootLoader,action as rootAction} from "./routes/Root.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Contact, {loader as contactLoader} from "./routes/Contact.jsx"
import EditContact, {action as editAction} from "./routes/Edit.jsx"
import {action as destroyAction} from "./routes/destroy.jsx"
import Index from './routes/index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index:true,element:<Index />
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error</div>
      }
    ],

  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
