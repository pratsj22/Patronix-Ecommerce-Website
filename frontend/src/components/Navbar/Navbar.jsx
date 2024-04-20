import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
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
    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>
          <div className="items-center hidden x-sm:flex z-50">
            <SidebarWithBurgerMenu />
          </div>
          <div className="item">
            <span>INR</span>
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
          </div>
          <div className="item cat" >
            <Dropdown />
          </div>
          <div className='item'>
            <Link to="/">Homepage</Link>
          </div>
        </div>

        <div className='centre'>
          <Link to="/">Patronix</Link>
        </div>


        <div className='right'>
          <div className='item'>
            <Link to="/">About</Link>
          </div>
          <div className='item'>
            <Link to="/">Contact</Link>
          </div>
          <div className='item'>
            <Link to="/">Stores</Link>
          </div>
          <div className="icons flex items-center">
            <div onClick={() => setSearch(!search)}>
              <SearchIcon />
            </div>
            <UserDetail />
            <FavoriteBorderOutlinedIcon className='ic' />
            <div className="carticon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
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