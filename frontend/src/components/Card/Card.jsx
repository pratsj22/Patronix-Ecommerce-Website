import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link to={'/product/' + item._id} className='block w-full sm:w-64 max-w-[260px] h-96 mb-10'>
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 shadow-md">
        <img
          alt=""
          src={item.image1}
          className="h-72 w-72 object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-normal text-gray-700">{item.title.split(" ").slice(0, 5).map((i) => (i + " "))}</h3>
      <div className="flex items-baseline gap-2">
        <span className='text-gray-500 line-through'>₹{Math.floor(item?.price * (1.2))}</span>
        <span className="text-lg font-medium text-gray-900">₹{item?.price}</span>
      </div>
    </Link>
  )
}

export default Card