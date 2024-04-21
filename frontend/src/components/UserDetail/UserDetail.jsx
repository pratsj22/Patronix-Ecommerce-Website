import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserDetail() {
  const user = useSelector((data) => data.userData.user)
  const[logout,setLogout]= useState(false)
  const location= useLocation();
  return (
    <Menu as="div" className="relative inline-block text-left ic">
      <div className='flex items-center'>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-m items-center" >
          <PersonOutlineOutlinedIcon />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-10 top-11 z-10 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={user?"/user/profile":"/user/login"}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  My Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={user?"/user/orders":"/user/login"}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Orders
                </Link>
              )}
            </Menu.Item>
            {!user ? <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/user/login"}
                  state={location.pathname}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Signin/Login
                </Link>
              )}
            </Menu.Item>
              :
              <Menu.Item>
                {({ active }) => (
                  <p
                    onClick={()=> setLogout(true)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Logout
                  </p>
                )}
              </Menu.Item>
            }
          </div>
        </Menu.Items>
      </Transition>
      {logout && <LogoutButton setLogout={setLogout} />}
    </Menu>
  )
}
