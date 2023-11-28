import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'

export default function MainHome() {
  return (
    <div>
          <Topbar/>
          <div className='container'>
            
          <Sidebar/>
          <Home/>
          </div>
              {/* <Topbar />
              <Sidebar /> */}
    </div>
  )
}
