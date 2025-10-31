import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import api from '../../api/api'
import CardSkeleton from '../Card/CardSkeleton'

const List = ({ catId, sort, subCats }) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.post(`/api/v1/products/category/${catId}`,{
          sort,
          subCats:Array.from(subCats)
        })
        setData(response.data.response)
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [catId,sort,subCats])

  if (loading) {
    return (
      <div className="mx-4 md:mx-10 flex flex-wrap justify-between">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    )
  }

  return (
    <div className="mx-4 md:mx-10 flex flex-wrap justify-between">
      {error ? "Something went wrong!"
        : data?.map(item => (
          <Card item={item} key={item._id} />
        ))}
    </div>
  )
}

export default List