import { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import api from '../../api/api';


const Product = () => {
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1)
  const [selectedImg, setSelectedImg] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const [data,setData]=useState()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(()=>{
    const fetchData = async () => {
        const response= await api.get(`/api/v1/products/product/${id}`)
        setData(response.data.response)
    }
    fetchData();
  },[id])
  useEffect(()=>{
    // when data loads, clear loading flag
    setLoading(data ? false : true)
  },[data])
  // show skeleton while loading
  if (loading) {
    return (
      <div className="mx-auto px-6 lg:px-24 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:flex-1 flex gap-4">
            <div className="flex flex-col gap-4 w-24">
              <div className="w-full h-24 bg-gray-200 rounded animate-pulse" />
              <div className="w-full h-24 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="w-full h-80 md:h-[600px] bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          <div className="md:flex-1 flex flex-col gap-6">
            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse" />
            <div className="w-1/4 h-10 bg-gray-200 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
              <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="w-56 py-3 bg-gray-200 rounded animate-pulse" />
            <div className="flex gap-6">
              <div className="w-36 h-6 bg-gray-200 rounded animate-pulse" />
              <div className="w-36 h-6 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <div className="w-1/2 h-3 bg-gray-200 rounded animate-pulse" />
              <div className="w-1/3 h-3 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto px-6 lg:px-24 py-8 mb-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:flex-1 flex gap-4">
          <div className="flex flex-col gap-4 w-24">
            <img src={data?.image1} alt="" onClick={e => setSelectedImg(data?.image1)} className="w-full h-24 object-cover rounded cursor-pointer" />
            <img src={data?.image2} alt="" onClick={e => setSelectedImg(data?.image2)} className="w-full h-24 object-cover rounded cursor-pointer" />
          </div>
          <div className="flex-1">
            <img src={selectedImg ?? data?.image1} alt="" className="w-full max-h-[600px] object-cover rounded" />
          </div>
        </div>

        <div className="md:flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">{data?.title}</h1>
          <span className='text-3xl text-blue-600 font-medium'>₹{data?.price}</span>
          <p className="text-base font-light text-justify">{data?.description}</p>

          <div className="flex items-center gap-4">
            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">-</button>
            <div>{quantity}</div>
            <button onClick={() => setQuantity(prev => prev + 1)} className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">+</button>
          </div>

          <button
            onClick={() => dispatch(addToCart({
              id: data?._id,
              title: data?.title,
              img: data?.image1,
              price: data?.price,
              quantity,
            }))}
            className="w-56 py-3 bg-blue-600 text-white rounded flex items-center justify-center gap-3"
          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>

          <div className="flex gap-6 text-blue-600">
            <div className="flex items-center gap-2"><FavoriteBorderIcon /> ADD TO WISHLIST</div>
            <div className="flex items-center gap-2"><BalanceIcon /> ADD TO COMPARE</div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-500 mt-4">
            <span>Vendor: Polo</span>
            <span>Product Type: Random</span>
            <span>Tag: tag1 , tag2</span>
          </div>

          <div className="mt-4">
            <hr />
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-500 mt-4">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product