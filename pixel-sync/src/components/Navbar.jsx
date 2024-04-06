import React from 'react'
import styled from "styled-components"
import avatar from "../assets/images/pic4.jpg"
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
const Navbar = ({dark,setDark}) => {
  return (
      <Navbarstyle>
          <div className="darkToggle">
              <div className={dark ? "inactive-sun":"active"} onClick={()=> {setDark(!dark)}}><IoSunny /></div>
              <div className={dark ? "active":"inactive-moon"}  onClick={()=> {setDark(!dark)}}><IoMdMoon/></div>
          </div>
          <div className='AdminBox'>
              <div className='about'>
                  <p>Hi,<br/>
                 <b>ROOT</b><br/>
                 ADMIN</p>
              </div>
              <div className="imgBox">
              <img src={avatar} alt="" />
              </div>  
           </div>
          
          
    </Navbarstyle>
  )
}
const Navbarstyle = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
    padding-top: 1.4rem;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 3%;
    gap: 3rem;
    @media only screen and (max-width: 770px){
        background-color: white;
        width: 100%;
        box-shadow: 0 1rem 1rem rgba(132, 139, 200, 0.18);
        padding: 5px;
        gap: 5rem;
        .imgBox{
            margin: 5px;
            height: 2.2rem;
            width: 2rem;
        }

        .about{
            display: none;
        }
    }
    .darkToggle{
        display: flex;
        align-items: center;
        .active {
            display:flex;
            align-items: center;
            color: white;
            font-size: 1.2rem;
            background-color: #195bce;
            border-radius: 0.4rem;
            padding: 5px;
        }
        .inactive-moon{
            display: flex;
            align-itemss: center;
            color: #363949;
            background-color: #e2e3f0;
            padding: 4px;
            border-radius: 0 0.4rem 0.4rem 0;

        }
        .inactive-sun{
            display: flex;
            align-itemss: center;
            color: #363949;
            background-color: #e2e3f0;
            padding: 4px;
            border-radius: 0.4rem 0rem 0rem 0.4rem;

        }
    }
    .AdminBox{
        display:flex;
        justify-content: end;
        gap: 2rem;
        p{
            text-align: right;
            font-size: 11px;
            color: #677483;
        }
        b{
            color: black;
        }
    }
    .imgBox{
        width: 2.5rem;
        height: 2.8rem;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
`
export default Navbar