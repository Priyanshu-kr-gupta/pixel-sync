import React from 'react'
import styled from "styled-components"
import avatar from "../assets/images/pic4.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
      <Navbarstyle>
          <GiHamburgerMenu />
          <img src={avatar} alt="" />
    </Navbarstyle>
  )
}
const Navbarstyle = styled.div`

`
export default Navbar