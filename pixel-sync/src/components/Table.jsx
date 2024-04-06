import React from 'react'
import styled from 'styled-components'
const Table = () => {
  return (
      <TableStyle>
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
        <td class="primary Details">Details</td>
    </tr><tr>
        <td>Laptop</td>
        <td>98,762</td>
        <td>Refunded</td>
        <td class="danger">Declined</td>
        <td class="primary Details">Details</td>
    </tr><tr>
        <td>Airpods</td>
        <td>1,95,345</td>
        <td>Paid</td>
        <td class="primary">Active</td>
        <td class="primary Details">Details</td>
    </tr></tbody>
          </table>
          <div className='center'>
          <a href="#">Show More</a>
          </div>
         
    </TableStyle>
  )
}
const TableStyle = styled.div`
@media only screen and (max-width: 1000px){
    .Details{
        display: none;
    }
}
font-size: 13px;
th{
    padding: 5px;

}
tr{
    border-bottom: 1px solid #677483;
    color: #677483;
}
td{
    padding: 5px;
}
.center{
    text-align: center;
}
a{
    margin: 4px;
    text-align: center;
    text-decoration: none;
  }
table{
    background: white;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    width: 100%;
    padding-top: 1rem;
    text-align: center;
    border-radius: 2rem;
    transition: all 0.3s ease;
}
.warning {
    color: #F7D060;
}
.danger {
    color: #FF0060;
}
.primary{
    color: #195bce;
}

h2{
    padding-top: 5px;
    font-size: 23.2px;
    font-weight: 500;
    color: #363949;
}
`
export default Table