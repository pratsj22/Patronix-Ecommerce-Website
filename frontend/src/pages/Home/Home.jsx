import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProd from '../../components/FeaturedProd/FeaturedProd'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import axios from 'axios'
const Home = () => {
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}`)
    },1200000)
    return ()=> clearInterval(intervalId);
  },[])
  return (
    <div>
      <Slider />
      <FeaturedProd type="Featured"/>
      <Categories/>
      <FeaturedProd type="Trending"/>
      <Contact/>
    </div>
  )
}

export default Home