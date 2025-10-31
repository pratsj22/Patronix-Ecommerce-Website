import Slider from '../../components/Slider/Slider'
import FeaturedProd from '../../components/FeaturedProd/FeaturedProd'
import Categories from '../../components/Categories/Categories'
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Slider />
      <FeaturedProd type="Featured"/>
      <Categories/>
      <FeaturedProd type="Trending"/>
    </div>
  )
}

export default Home