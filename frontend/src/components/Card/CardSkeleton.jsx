import React from 'react'

const CardSkeleton = () => {
  return (
    <div className="block w-full sm:w-64 max-w-[260px] card animate-pulse mb-5 mx-auto">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 shadow-md h-80">
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded"></div>
      <div className="flex items-baseline gap-2 mt-2">
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
