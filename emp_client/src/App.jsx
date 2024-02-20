import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className='flex'>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <Dashboard isSidebarOpen ={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    </div>
  )
}
