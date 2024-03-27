import {} from 'react'
// import Sidebar from './components/Sidebar'
import Dashboard from './components/Layout'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Profile from './pages/Profile';
import Settings from './pages/Settings'
import Report from './pages/Report'
import AddEmployee from './pages/AddEmployee';
import Employees from './pages/Employees'
import NotFound from './pages/NotFound';
import EditEmployee from './pages/EditEmployee';



export default function App() {
  const router = createBrowserRouter([
    {  
      element: <Dashboard/>,
      errorElement:<NotFound/>,
    
    children: [
      {
        path: "/",
        element: <Employees/>,
      },
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/settings",
          element: <Settings/>,
        },
        {
          path: "/report",
          element: <Report/>,
        },
        {
          path: "/new",
          element: <AddEmployee/>,
        },
        {
          path: "/employee/:id",
          element: <EditEmployee/>,
        },
      ]
    }
  ]);
  return (
    
    <div>
      <RouterProvider router={router} />      
    </div>
  )
}
