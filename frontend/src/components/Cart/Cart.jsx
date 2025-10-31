import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = ({ open, setOpen }) => {
    const products = useSelector(state => state.cartData.products)
    const user = useSelector(state => state.userData.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPrice = () => {
        let total = 0;
        products.forEach(element => {
            total += element.price * element.quantity
        });
        return total.toFixed(2);
    }
    const handleCheckOut = () => {
        setOpen(false)
        if (products.length === 0) {
            toast.error("Add something to the cart", {
                position: 'top-center'
            })
            return;
        }
        if (!user) {
            navigate("/user/login", { state: "/checkout" })
        }
        if (user) {
            navigate("/checkout")
        }
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <div role="list" className="-my-6 divide-y divide-gray-200">
                                                {products.map((product) => (
                                                    <div key={product.id} className="flex py-6">
                                                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img
                                                                alt=""
                                                                src={product.img}
                                                                className="h-full w-full object-cover object-center"
                                                            />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <Link to={`/product/${product.id}`} onClick={() => setOpen(false)}>{product.title}</Link>
                                                                        </h3>
                                                                        <p className="ml-4">₹{product.price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-1 justify-between text-sm">
                                                                <p className="text-gray-500">Qty {product.quantity}</p>

                                                                <div className="flex items-end">
                                                                    <button type="button"
                                                                        onClick={() => dispatch(removeItem(product.id))}
                                                                        className="font-medium text-blue-600 hover:text-blue-500">
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>₹{totalPrice()}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <div
                                            onClick={handleCheckOut}
                                            className="flex items-center justify-center rounded-md border cursor-pointer border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            Checkout
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or{' '}
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="font-medium text-blue-600 hover:text-blue-500"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default Cart