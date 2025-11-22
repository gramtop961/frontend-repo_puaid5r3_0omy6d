import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div className="bg-white text-zinc-800 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}
