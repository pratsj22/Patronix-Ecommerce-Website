import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link to={'/product/' + item._id} className='sm:w-64 w-64 card'>
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 shadow-md">
        <img
          alt=""
          src={item.image1}
          className="h-full w-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-normal text-gray-700">{item.title.split(" ").slice(0, 5).map((i) => (i + " "))}</h3>
      <span className='text-gray-500 line-through'>₹{Math.floor(item?.price * (1.2))}</span>
      <span className="mt-1 ml-2 text-lg font-medium text-gray-900">₹{item?.price}</span>
    </Link>
  )
}

export default Card