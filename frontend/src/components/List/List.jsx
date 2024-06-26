import React, { useEffect, useState } from 'react'
import './List.scss'
import Card from '../Card/Card'
import axios from 'axios'

const List = ({ catId, maxPrice, sort, subCats }) => {
  // const {data,loading,error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
  const [data, setData] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/products/category/${catId}`,{
          maxPrice,
          sort,
          subCats
        })
        setData(response.data.response)
      } catch (error) {
        setError(error)
      }
    }
    fetchData();
  }, [catId,maxPrice,sort,subCats])
  return (
    <div className='list'>
      {error ? "Something went wrong!"
        : data?.map(item => (
          <Card item={item} key={item._id} />
        ))}
    </div>
  )
}

export default List