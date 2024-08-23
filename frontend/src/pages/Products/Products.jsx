import React, { useEffect, useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Products = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const Category = [
    "Mixers & Grinders",
    "Breakfast Appliances",
    "Heating Appliances",
    "Personal Grooming Appliances",
    "Fans",
    "Vacuum Cleaners"
  ]

  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]


  const id = useParams().id;
  const catId = parseInt(id)
  const [sort, setSort] = useState("")
  const [selectedSubCats, setSelectedSubCats] = useState(new Set())
  const [data, setData] = useState()
  const [error, setError] = useState()

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    const checked = e.target.checked
    const newSet = new Set(selectedSubCats)
    if (checked) newSet.add(value);
    else newSet.delete(value);
    setSelectedSubCats(newSet);
  }
  const handleSort = (index) => {
    if (sortOptions[index].current === true) return;
    sortOptions.map((item) => item.current = false);
    sortOptions[index].current = true;
    if (index === 2) setSort("asc")
    else if (index === 3) setSort("desc")
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/category/get-subCategory/${catId}`)
        setData(response.data.response)
      } catch (error) {
        setError(error)
      }
    }
    fetchData();
  }, [catId])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <div className="mt-4 border-t border-gray-200">
                <div className="filterItem ml-4 mt-2">
                  <h2 className='mb-1'>Product Categories</h2>
                  {error ? "Something Went Wrong!!"
                    : data?.map((item) => (
                      <div className="inputItem" key={item._id}>
                        <input type="checkbox" id={item._id} value={item._id} onChange={handleChange}
                          checked={selectedSubCats.has(item._id)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor={item._id} className="ml-3 min-w-0 flex-1 text-gray-500">{item.name}</label>
                      </div>
                    ))}

                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-2">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">{Category[id - 1]}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option, index) => (
                      <MenuItem key={option.name}>
                        <div
                          onClick={() => handleSort(index)}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 cursor-pointer',
                          )}
                        >
                          {option.name}
                        </div>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="filterItem hidden lg:block">
                <h2>Product Categories</h2>
                {error ? "Something Went Wrong!!"
                  : data?.map((item) => (
                    <div className="inputItem" key={item._id}>
                      <input type="checkbox" id={item._id} value={item._id} onChange={handleChange}
                        checked={selectedSubCats.has(item._id)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                      <label htmlFor={item._id} className="ml-3 text-sm text-gray-600">{item.name}</label>
                    </div>
                  ))}

              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <List catId={catId} sort={sort} subCats={selectedSubCats} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Products