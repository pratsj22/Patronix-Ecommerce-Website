import React, { useEffect, useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import axios from 'axios';


const Product = () => {
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1)
  const [selectedImg, setSelectedImg] = useState(null)
  const dispatch = useDispatch()
  const [data,setData]=useState()
  useEffect(()=>{
    const fetchData = async () => {
        const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/products/product/${id}`)
        setData(response.data.response)
    }
    fetchData();
  },[id])
  return (
    <div className='product'>
      {/* {loading ? "loading" */}
         {/* : (<> */}
          <div className="left">
            <div className="images">
              <img src={data?.image1} alt="" onClick={e => setSelectedImg(data?.image1)} />
              <img src={data?.image2} alt="" onClick={e => setSelectedImg(data?.image2)} />
            </div>
            <div className="mainImg">
              <img src={selectedImg??data?.image1} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.title}</h1>
            <span className='price'>₹{data?.price}</span>
            <p>{data?.description}</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button className="add"
              onClick={()=>dispatch(addToCart({
                id: data?._id,
                title: data?.title,
                img: data?.image1,
                price: data?.price,
                desc: data?.description,
                quantity,
            }))}
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: Random</span>
              <span>Tag: tag1 , tag2</span>
            </div>
            <div>
              <hr />
            </div>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        {/* </>)} */}
    </div>
  )
}

export default Product