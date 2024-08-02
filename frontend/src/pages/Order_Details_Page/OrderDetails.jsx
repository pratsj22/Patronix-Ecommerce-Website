import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useValidate from "../../hooks/useValidate";

export default function OrderDetails() {
  const[orders,setOrders]=useState()
  const {user}=useValidate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(()=>{
    const fetchData=async()=>{
      const res= await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/orders/get-orders/${user.id}`)
      setOrders(res.data.data)
    }
    fetchData()
  },[user])
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Your Orders</h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover similar products.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          {orders?.map((order) => (
            <section key={order.id} aria-labelledby={`${order.id}-heading`}>
              <div className="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
                <h2 id={`${order.id}-heading`} className="text-lg font-medium text-gray-900 md:flex-shrink-0">
                  Order #{order.id}
                </h2>
                <div className="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1">
                  <p className="text-sm font-medium text-gray-500">{order.status}</p>
                </div>
              </div>

              <div className="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
                {order.products.map((product) => (
                  <div key={product.id} className="py-6 sm:flex">
                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                      <img
                        src={product.image}
                        alt=''
                        className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                      <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                        <h3 className="text-sm font-medium text-gray-900">
                          <Link to={"/product/"+product.id}>{product.title}</Link>
                        </h3>
                        <p className="truncate text-sm text-gray-500">
                          <span>Quantity</span>{' '}
                          <span className="mx-1 text-gray-400" aria-hidden="true">
                            &middot;
                          </span>{' '}
                          <span>{product.quantity}</span>
                        </p>
                        <p className="mt-1 font-medium text-gray-900">₹ {product.price}</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                      >
                        Buy again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      
    </div>
  )
}
