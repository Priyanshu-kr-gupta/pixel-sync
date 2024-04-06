import React from 'react'
import "../Css/SideBar.css"
export default function Sidebar() {
  return (
    <div className='side'>
            <div className='sideBar'>
                <div className='sideBarOptions'>
                    <p>Home</p>
                </div>
                <div className='sideBarOptions'>
                    <p>User</p>
                </div>
                <div className='sideBarOptions'>
                    <p>Transaction</p>
                </div>
                <div className='sideBarOptions'>
                    <p>Statistics</p>
                </div>
                <div className='sideBarOptions'>
                    <p>Mails</p>
                </div>
                <div className='sideBarOptions'>
                    <p>Products</p>
                </div>
                <div className='sideBarOptions'>
                    <p>Reports</p>
                </div>
                <div className='sideBarOptions'>
                    <p>Setting</p>
                </div>
            </div>
    </div>
  )
}
