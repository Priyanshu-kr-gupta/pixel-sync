import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
<<<<<<< HEAD
import Users from './components/Users'
function App() {

  return (
    <div className='container'>
       <Sidebar/>
       <div className='main'>
        
       <Users/>
       </div>
=======
import Navbar from './components/Navbar'
import Table from './components/Table'
function App() {
  const [dark, setDark] = useState(0)

  return (
    <div className='container'>
      <Navbar dark={dark} setDark={setDark} />
      <Sidebar />
      <Table />
>>>>>>> fbbc550f2a04a4ce1469e46c0fa2ffe6c5d16a07
    </div>
  )
}

export default App
