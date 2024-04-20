import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row cat">
          <img src="img/categories/cat1.webp" alt="" />
          <button>
            <Link to="./products/1">Mixers & Grinders</Link>
          </button>
        </div>
        <div className="row cat">
          <img src="img/categories/cat2.jpg" alt="" />
          <button>
            <Link to="./products/2">Breakfast Appliances</Link>
          </button></div>
      </div>
      <div className="col">
        <div className="row cat">
          <img src="img/categories/cat3.webp" alt="" />
          <button>
            <Link to="./products/3">Heating Appliances</Link>
          </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row cat">  
              <img src="img/categories/cat4.webp" alt="" />
              <button>
                <Link to="./products/4">Personal Grooming Appliances</Link>
              </button></div>
          </div>
          <div className="col">
            <div className="row cat">
              <img src="img/categories/cat5.webp" alt="" />
              <button>
                <Link to="./products/5">Fans</Link>
              </button></div>
          </div>
        </div>
        <div className="row cat">
          <img src="img/categories/cat6.webp" alt="" />
          <button>
            <Link to="./products/6">Vacuum Cleaners</Link>
          </button></div>
      </div>
    </div>
  )
}

export default Categories