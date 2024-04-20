import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Checkout = () => {
    const products = useSelector(state => state.cartData.products)
    const location = useLocation()
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
        <div className="bg-[white] lg:h-screen lg:sticky lg:top-0">
          <div className="relative h-full">
            <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
              <h2 className="text-2xl font-bold text-black">Order Summary</h2>
              <div className="space-y-6 mt-10">
                {products.map((item)=>(
                <div className="grid sm:grid-cols-2 items-start gap-6" key={item.id}>
                  <div className="px-4 py-6 shrink-0 bg-blue-50 rounded-md">
                    <img src={item.img} alt="" className="w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base text-black">{item.title}</h3>
                    <ul className="text-xs text-black space-y-3 mt-4">
                      <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">{item.quantity}</span></li>
                      <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">${item.price*item.quantity}</span></li>
                    </ul>
                  </div>
                </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 bottom-0 bg-blue-00 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-black">Total <span className="ml-auto">${location.state.total}</span></h4>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
          <h2 className="text-2xl font-bold text-[#333]">Complete your order</h2>
          <form className="mt-10">
            <div>
              <h3 className="text-lg font-bold text-[#333] mb-6">Personal Details</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative flex items-center">
                  <input type="text" placeholder="First Name"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                </div>
                <div className="relative flex items-center">
                  <input type="text" placeholder="Last Name"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                </div>
                <div className="relative flex items-center">
                  <input type="email" placeholder="Email"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                </div>
                <div className="relative flex items-center">
                  <input type="number" placeholder="Phone No."
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-[#333] mb-6">Shipping Address</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Address Line"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="City"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="State"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="Zip Code"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
              </div>
              <div className="flex gap-6 max-sm:flex-col mt-10">
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-blue-100 border-2 text-[#333]">Cancel</button>
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-blue-600 text-white hover:bg-[#222]">Complete Purchase</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout