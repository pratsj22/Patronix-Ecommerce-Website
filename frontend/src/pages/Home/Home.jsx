import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProd from '../../components/FeaturedProd/FeaturedProd'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
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