import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee'
import Employees from './pages/Employees'
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    // TODO: Add react router dom navigation
    <>
      <div className='flex'>
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <Dashboard isSidebarOpen ={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      </div>
     
      <Routes>
        <Route path='/employees' element ={<Employees/>}/>
        <Route path='/employee/new' element ={<AddEmployee/>}/>
      </Routes>
      </>
  )
}
