import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <Link to="./products/1" className="row cat">
          <img src="img/categories/cat1.webp" alt="" />
          <div>Mixers & Grinders <TrendingFlatIcon/></div>
        </Link>
        <Link to="./products/2" className="row cat">
          <img src="img/categories/cat2.jpg" alt="" />
          <div>Breakfast Appliances <TrendingFlatIcon/></div>
        </Link>
      </div>
      <div className="col">
        <Link to="./products/3" className="row cat">
          <img src="img/categories/cat3.webp" alt="" />
          <div>Heating Appliances <TrendingFlatIcon/></div>
        </Link>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <Link to="./products/4" className="row cat">
              <img src="img/categories/cat4.webp" alt="" />
              <div>Personal Grooming Appliances <TrendingFlatIcon/></div>
            </Link>
          </div>
          <div className="col">
            <Link to="./products/5" className="row cat">
              <img src="img/categories/cat5.webp" alt="" />
              <div>Fans <TrendingFlatIcon/></div>
            </Link>
          </div>
        </div>
        <Link to="./products/6" className="row cat">
          <img src="img/categories/cat6.webp" alt="" />
          <div>Vacuum Cleaners <TrendingFlatIcon/></div>
        </Link>
      </div>
    </div>
  )
}

export default Categories