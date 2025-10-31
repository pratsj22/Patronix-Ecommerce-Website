import React from 'react'
// Footer styling migrated to Tailwind (index.css / utility classes)

const Footer = () => {
  return (
    <footer className="mx-auto">
      {/* Newsletter Section */}
      <div className="bg-blue-600 text-white py-8 px-6 lg:px-48 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold">BE IN TOUCH WITH US</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black w-full sm:w-64"
          />
          <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto">
            JOIN US
          </button>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f text-2xl"></i></a>
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter text-2xl"></i></a>
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-pinterest text-2xl"></i></a>
        </div>
      </div>

      <div className="px-6 lg:px-48 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          <div className="flex-1 min-w-[200px] flex flex-col gap-2 text-sm text-justify">
            <h3 className="text-lg font-medium text-gray-600">Categories</h3>
            <span className="text-gray-500">Mixers</span>
            <span className="text-gray-500">Toasters</span>
            <span className="text-gray-500">Heaters</span>
            <span className="text-gray-500">Accessories</span>
            <span className="text-gray-500">New Arrivals</span>
          </div>

          <div className="flex-1 min-w-[200px] flex flex-col gap-2 text-sm">
            <h3 className="text-lg font-medium text-gray-600">Links</h3>
            <span className="text-gray-500">FAQ</span>
            <span className="text-gray-500">Pages</span>
            <span className="text-gray-500">Stores</span>
            <span className="text-gray-500">Compare</span>
            <span className="text-gray-500">Cookies</span>
          </div>

          <div className="flex-1 min-w-[200px] flex flex-col gap-2 text-sm">
            <h3 className="text-lg font-medium text-gray-600">About</h3>
            <span className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro reprehenderit dolor nostrum, maiores perferendis.</span>
          </div>

          <div className="flex-1 min-w-[200px] flex flex-col gap-2 text-sm">
            <h3 className="text-lg font-medium text-gray-600">Contact</h3>
            <span className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro reprehenderit dolor nostrum, maiores perferendis.</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-2xl font-bold text-blue-600 w-full text-left">Patronix</span>
            <span className="sm:ml-4 text-sm text-gray-500 whitespace-nowrap">©️ Copyright {new Date().getFullYear()}. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer