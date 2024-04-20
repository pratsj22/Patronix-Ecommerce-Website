import React, { useEffect, useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';

const Products = () => {
  const iconic=[
    <KeyboardArrowDownIcon />,
    <KeyboardArrowUpIcon/>
  ]
  const image=[
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg",
    "/img/img5.jpg",
    "/img/img6.jpg",
  ]

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(50000)
  const [icon,setIcon] = useState(0);
  const [sort,setSort]=useState("")
  const [selectedSubCats,setSelectedSubCats] = useState([])
  const [data,setData]=useState()
  const [error,setError]=useState()

  const handleChange=(e)=>{
    const value = e.target.value
    const checked = e.target.checked
    console.log(value);
    setSelectedSubCats(checked? [...selectedSubCats,value]: selectedSubCats.filter(item=>item!==value))
  }
  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/category/get-subCategory/${catId}`)
          setData(response.data.response)
        } catch (error) {
          setError(error)
        }
    }
    fetchData();
  },[catId])
  return (
    <div className="products">
      <div className="topfilter" onClick={()=>setIcon(icon===0? 1:0)}>
        <h2>Filters</h2>
        {iconic[icon]}
      </div>
      <div className="left" style={{display: icon===1 ?'block' : null}}>
        <div className="filterItem">
          <h2>Product Categories</h2>
          {error?"Something Went Wrong!!"
          :data?.map((item)=>(
            <div className="inputItem" key={item._id}>
            <input type="checkbox" id={item._id} value={item._id} onChange={handleChange} />
            <label htmlFor={item._id}>{item.name}</label>
          </div>
            ))}
  
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={50000} onChange={(e)=>setMaxPrice(parseInt(e.target.value))}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e) =>setSort("asc")}/>
            <label htmlFor="asc">Price(Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={(e) =>setSort("desc")}/>
            <label htmlFor="desc">Price(Highest First)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img className='catImg' src={image[catId-1]} alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products