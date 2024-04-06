import React from 'react'
import "../Css/SideBar.css"
import { AiFillHome } from "react-icons/ai";
import { FaCreativeCommonsSa, FaCross, FaRegUser } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { IoCodeWorkingSharp, IoMailSharp } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { BiCross, BiLogOut } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/images/logo.jpeg"
import { RxCross2 } from "react-icons/rx";
export default function Sidebar() {


  return (
    <div className='side'>
        <div className='toggle'>
                <div className='logo'>
                    <div className='logoimg'>  <img src={Logo} alt="" /> </div>
                    <p style={{display:"flex"}}><h2>Pixel</h2><h2 style={{color:"Red"}}>Sync</h2></p>
                    
                </div>
                <div className='togglebtn'>
                    <GiHamburgerMenu/>
                </div>
                <div className='togglebtncross'>
                    <RxCross2/>
                </div>
        </div>
            <div className='sideBar'>
                <div className='sideBarOptions'>
                    <AiFillHome/>
                    <p>Home</p>
                </div>
                <div className='sideBarOptions'>
                    <FaRegUser/>
                    <p>User</p>
                </div>
                <div className='sideBarOptions'>
                    <GiStabbedNote/>
                    <p>Transaction</p>
                </div>
                <div className='sideBarOptions active' style={{marginLeft:"0px"}}>
                    <VscGraph/>
                    <p>Statistics</p>
                </div>
                <div className='sideBarOptions'>
                    <IoMailSharp/>
                    <p>Mails</p>
                    <p className='subval'>12</p>
                </div>
                <div className='sideBarOptions'>
                    <BsShopWindow/>
                    <p>Products</p>
                </div>
                <div className='sideBarOptions'>
                    <TbReportSearch/>
                    <p>Reports</p>
                    <p className='subval'>3</p>


                </div>
                <div className='sideBarOptions'>
                    <AiFillSetting/>
                    <p>Setting</p>
                </div>
                <div className='sideBarOptions' style={{position:"relative",top:"20px"}}>
                    <BiLogOut/>
                
                    <p>Logout </p>
                </div>
            </div>
                    
         
    </div>
  )
}
