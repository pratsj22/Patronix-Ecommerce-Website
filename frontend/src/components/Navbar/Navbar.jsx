import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
// Navbar styles replaced with Tailwind classes
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import Search from '../Search/Search';
import UserDetail from '../UserDetail/UserDetail';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import SidebarWithBurgerMenu from './SideBar';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const products = useSelector(state => state.cartData.products)
  return (
    <div className="h-20 shadow-md mb-2 bg-white sticky top-0 z-10">
      <div className="sm:px-3 px-1 h-full flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-6 ml-5 sm:mr-12">
          <div className="flex md:hidden items-center z-50">
            <SidebarWithBurgerMenu />
          </div>
          <div className="hidden md:block cursor-pointer">
            <Dropdown />
          </div>
          <div className="hidden md:flex items-center text-base">
            <Link to="/">Homepage</Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex items-center text-3xl tracking-wider font-semibold">
          <Link to="/">Patronix</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 mr-2">
          <div className="hidden md:flex items-center text-base">
            <Link to="/">About</Link>
          </div>
          <div className="hidden md:flex items-center text-base">
            <Link to="/">Contact</Link>
          </div>
          <div className="hidden md:flex items-center text-base">
            <Link to="/">Stores</Link>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div onClick={() => setSearch(!search)} className="p-1">
              <SearchIcon />
            </div>
            <UserDetail />
            <FavoriteBorderOutlinedIcon className="hidden sm:inline" />
            <div className="relative" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="absolute -right-2 -top-2 text-xs w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart open={open} setOpen={setOpen} />}
      {search && <Search setSearch={setSearch} />}
    </div>
  )
}

export default Navbar