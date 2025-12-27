import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// slider visuals moved to Tailwind (index.css)
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            speed={1200}
            loop
            pagination={{ clickable: true }}
            autoplay={
                { delay: 2500, }
            }
        >
            <SwiperSlide>
                <Link to="./products/1" >
                    <img className="w-full h-[20rem] sm:h-[30rem] sm:object-fill" src="/img/img1.jpg" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="./products/4" >
                    <img className="w-full h-[20rem] sm:h-[30rem] sm:object-fill" src="/img/img4.jpg" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="./products/2" >
                    <img className="w-full h-[20rem] sm:h-[30rem] sm:object-fill" src="/img/img2.jpg" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="./products/5" >
                    <img className="w-full h-[20rem] sm:h-[30rem] sm:object-fill" src="/img/img5.jpg" alt="" />
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider