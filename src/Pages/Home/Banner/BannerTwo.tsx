import '../style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'; 
// import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import { SimilarHeading } from '../../../component/SimilarHeading';

export const BannerTwo = () => {
  
  return (
    <section className='my-12'>
       <SimilarHeading heading='--From 11:00am to 10:00pm--' text='Order Online'/>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:4000,
            disableOnInteraction:false
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper mt-8"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <p className='relative bottom-16 text-3xl text-white'>SALADS</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <p className='relative bottom-16 text-3xl text-white'>SOUP</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />

            <p className='relative bottom-16 text-3xl text-white'>PIZZA</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <p className='relative bottom-16 text-3xl text-white'>DESSETS</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <p className='relative bottom-16 text-3xl text-white'>VEGETABLES</p>
        </SwiperSlide>
    
      </Swiper>
    </section>
  )
}
