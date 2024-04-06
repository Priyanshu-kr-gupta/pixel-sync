import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function Users() {
  return (

    <div class="container">
  <div class="card">
    <img src="user1.jpg" alt="User 1"/>
    <div class="details">
      <h2>User 1</h2>
      <p>User 1 Details...</p>
    </div>
  </div>
  <div class="card">
    <img src="user2.jpg" alt="User 2"/>
    <div class="details">
      <h2>User 2</h2>
      <p>User 2 Details...</p>
    </div>
  </div>
  <div class="card">
    <img src="user3.jpg" alt="User 3"/>
    <div class="details">
      <h2>User 3</h2>
      <p>User 3 Details...</p>
    </div>
  </div>
  <div class="card">
  <RxCross2/>
  </div>
</div>

  )
}
