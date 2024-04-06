import React from 'react'

const Table = () => {
  return (
      <div>
          <h2>Order</h2>
          <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody><tr>
        <td>Mobile</td>
        <td>9,06,756</td>
        <td>Due</td>
        <td class="warning">Pending</td>
        <td class="primary">Details</td>
    </tr><tr>
        <td>Laptop</td>
        <td>98,762</td>
        <td>Refunded</td>
        <td class="danger">Declined</td>
        <td class="primary">Details</td>
    </tr><tr>
        <td>Airpods</td>
        <td>1,95,345</td>
        <td>Paid</td>
        <td class="primary">Active</td>
        <td class="primary">Details</td>
    </tr></tbody>
          </table>
          <a href="#">Show More</a>
    </div>
  )
}

export default Table