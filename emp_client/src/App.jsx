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
      ]
    }
  ]);
  return (
    // TODO: Add react router dom navigation
    <div>
      <RouterProvider router={router} />      
    </div>
  )
}
