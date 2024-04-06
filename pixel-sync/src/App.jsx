import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Users from './components/Users'
function App() {

  return (
    <div className='container'>
       <Sidebar/>
       <div className='main'>
        
       <Users/>
       </div>
    </div>
  )
}

export default App
