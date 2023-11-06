import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root ,{ loader as rootLoader,action as rootAction} from "./routes/Root.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Contact, {loader as contactLoader} from "./routes/Contact.jsx"
import EditContact, {action as editAction} from "./routes/Edit.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
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
      }
    ],

  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
