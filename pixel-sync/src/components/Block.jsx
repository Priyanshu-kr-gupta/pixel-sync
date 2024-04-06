import React from 'react'
import "../Css/Block.css"
const Block = (props) => {
  return (
    <div className='block'>

        <div className="content" style={{width:props.width}}>
        <div className=''>
        <p>{props.text}</p>
        <h1>{props.symbol}{props.amount}</h1>
        </div>
        <div className='percentage'>{props.percent}</div>
        </div>
        
    </div>
  )
}

export default Block