import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Table from './components/Table'
function App() {
  const [dark, setDark] = useState(0)

  return (
    <div className='container'>
      <Navbar dark={dark} setDark={setDark} />
      <Sidebar />
      <Table />
    </div>
  )
}

export default App
