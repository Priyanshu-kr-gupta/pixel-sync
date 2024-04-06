import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Pic1 from "../assets/images/pic1.jpg"
import Pic2 from "../assets/images/pic2.jpg"
import Pic3 from "../assets/images/pic3.jpg"
import "../Css/Users.css"
export default function Users() {
  return (
<>
<h2>Users</h2>
    <div class="usercontainer">

  <div class="card">
    <img src={Pic1} alt="User 1"/>
    <div class="details">
      <h2>User 1</h2>
      <p>User 1 Details...</p>
    </div>
  </div>
  <div class="card">
    <img src={Pic2} alt="User 2"/>
    <div class="details">
      <h2>User 2</h2>
      <p>User 2 Details...</p>
    </div>
  </div>
  <div class="card">
    <img src={Pic3} alt="User 3"/>
    <div class="details">
      <h2>User 3</h2>
      <p>User 3 Details...</p>
    </div>
  </div>
  <div class="card">
  <RxCross2/>
  </div>
</div>

</>
  )
}
