import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProd.scss'
import axios from 'axios'
const FeaturedProd = ({ type }) => {
  const [data,setData]=useState()
  const [error,setError]=useState()

  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/products/${type.toLowerCase()}`)
          setData(response.data.response)
        } catch (error) {
          setError(error)
        }
    }
    fetchData();
  },[type])
  return (
    <div className='featuredprod'>
      <div className="top">
        <h1><b>{type} Products</b></h1>
      </div>
      <div className="bottom w-full">
        {error?"Something Went Wrong"
        :data?.map(item => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProd