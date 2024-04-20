import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <Link to={'/product/'+item._id}>
    <div className='card'>
      <div className="image">
        {item?.newArrival && <span>New Arrival</span>}
        <img src={item.image1} alt="" className="mainImg" />
        <h2>{item.title.split(" ").slice(0,5).map((i)=>(i+" "))}</h2>
        <div className="prices">
         <h3>₹{Math.floor(item?.price * (1.2))}</h3> 
         <h3>₹{item?.price}</h3> 
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Card