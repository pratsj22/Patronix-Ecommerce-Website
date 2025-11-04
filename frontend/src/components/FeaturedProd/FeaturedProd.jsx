import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import api from '../../api/api'
import CardSkeleton from '../Card/CardSkeleton'
const FeaturedProd = ({ type }) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/v1/products/${type.toLowerCase()}`)
        setData(response.data.response)
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [type])
  if (loading) {
    return (
      <section className="mx-auto px-6 lg:px-24 py-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold">{type} Products</h2>
        </div>
        <div className="w-full flex flex-wrap justify-between sm:flex-row flex-col items-center">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </section>
    )
  }
  return (
    <section className="mx-auto px-6 lg:px-24 py-12">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-semibold">{type} Products</h2>
      </div>
      <div className="w-full flex flex-wrap justify-between sm:flex-row flex-col items-center">
        {error ? "Something Went Wrong"
          : data?.map(item => (
            <Card item={item} key={item._id} />
          ))}
      </div>
    </section>
  )
}

export default FeaturedProd