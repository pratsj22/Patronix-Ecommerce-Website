import React, { useState } from "react";
import {
    ShoppingBagIcon,
    UserCircleIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";

function SidebarWithBurgerMenu() {
    const [open, setOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const user = useSelector((data) => data.userData.user)
    const [logout, setLogout] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleLogout = () => {
        setLogout(!logout);
        if (!logout) {
            closeDrawer()
        }
    }
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    return (
        <>
            <MenuIcon fontSize="large" onClick={openDrawer} />
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={closeDrawer}></div>
            )}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
            >
                <div
                    className="relative flex h-full w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
                    <div className="p-4 mb-2 flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Patronix
                        </h5>
                        <CloseIcon fontSize="large" onClick={closeDrawer} className="cursor-pointer" />
                    </div>
                    <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                        <div className="relative block w-full">
                            <div role="button"
                                className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <button type="button"
                                    onClick={handleOpen}
                                    className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900">
                                    <div className="grid mr-4 place-items-center">
                                        <CategoryIcon className="h-5 w-5" />
                                    </div>
                                    <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                                        Categories
                                    </p>
                                    <span className="ml-4">
                                        <ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                                    </span>
                                </button>
                            </div>
                            {open && (
                                <div className="overflow-hidden">
                                    <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                                        <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                                            <Link to="/products/1" onClick={closeDrawer}>
                                                <div role="button"
                                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                    <div className="grid mr-4 place-items-center">
                                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                    </div>
                                                    Mixers & Grinders
                                                </div>
                                            </Link>
                                            <Link to="/products/2" onClick={closeDrawer}>
                                                <div role="button"
                                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                    <div className="grid mr-4 place-items-center">
                                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                    </div>
                                                    Breakfast Appliances
                                                </div>
                                            </Link>
                                            <Link to="/products/3" onClick={closeDrawer}>
                                                <div role="button"
                                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                    <div className="grid mr-4 place-items-center">
                                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                    </div>
                                                    Heating Appliances
                                                </div>
                                            </Link>
                                            <Link to="/products/4" onClick={closeDrawer}>
                                                <div role="button"
                                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                    <div className="grid mr-4 place-items-center">
                                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                    </div>
                                                    Personal Grooming Appliances
                                                </div>
                                            </Link>
                                            <Link to="/products/5" onClick={closeDrawer}>
                                                <div role="button"
                                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                    <div className="grid mr-4 place-items-center">
                                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                    </div>
                                                    Fans
                                                </div>
                                            </Link>
                                            <Link to="/products/6" onClick={closeDrawer}>
                                                <div role="button"
                                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                    <div className="grid mr-4 place-items-center">
                                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                    </div>
                                                    Vacuum Cleaners
                                                </div>
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                        <hr className="my-2 border-blue-gray-50" />
                        <Link to={user ? "/user/profile" : "/login"} onClick={closeDrawer}>
                            <div role="button"
                                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <div className="grid mr-4 place-items-center">
                                    <UserCircleIcon className="h-5 w-5" />
                                </div>
                                My Profile
                            </div>
                        </Link>
                        <Link to={user ? "/user/orders" : "/login"} onClick={closeDrawer}>
                            <div role="button"
                                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <div className="grid mr-4 place-items-center">
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </div>
                                Orders
                            </div>
                        </Link>
                        {user ?
                            <div role="button"
                                onClick={() => handleLogout()}
                                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <div className="grid mr-4 place-items-center">
                                    <PowerIcon className="h-5 w-5" />
                                </div>
                                Log Out
                            </div>
                            :
                            <Link to="/user/login">
                                <div role="button"
                                    onClick={closeDrawer}
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                    <div className="grid mr-4 place-items-center">
                                        <PowerIcon className="h-5 w-5" />
                                    </div>
                                    Signin/Login
                                </div>
                            </Link>
                        }
                    </nav>
                </div>
                {logout && <LogoutButton setLogout={setLogout} />}
            </div>
        </>
    )
}

export default SidebarWithBurgerMenu;