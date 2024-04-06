import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Users from './components/Users'
import Table from './components/Table'
import Navbar from './components/Navbar'
function App() {
const [dark,setDark]=useState(0);
  return (
    <div className='container'>
       <Sidebar/>
       <div className='main'>
        
       <Users/>
      <Table />
       </div>
        <Navbar dark={dark} setDark={setDark} />

    </div>
  )
}

export default App
