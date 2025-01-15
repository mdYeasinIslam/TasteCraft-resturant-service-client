import { useEffect, useState } from "react"
import { SimilarHeading } from "../../../component/SimilarHeading"
import axios from "axios"
import { ReviewType } from "../../../Type/Types"
import { SwiperSlide,Swiper } from "swiper/react"
import 'swiper/swiper-bundle.css'; 
import '@smastrom/react-rating/style.css'
// import '../style.css'
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating"
export const Testimonial = () => {
    const [reviews, setReviews] = useState<ReviewType[]>([])
    useEffect(() => {
        axios.get('reviews.json')
            .then(res => {
            setReviews(res.data)
        })
    },[])
  return (
      <div className="space-y-5">
          <div>
              <SimilarHeading heading="----What Our Clients Say----" text="TESTIMONIALS"/>
          </div>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
              {
                  reviews.map(review => <SwiperSlide className="space-y-5" >
                        <Rating 
                         style={{ maxWidth: 180 }}
                          value={review.rating}
                          readOnly
                          className="w-10 mx-auto"
    />
                      <p className="w-3/4 mx-auto"> {review.details}</p>
                      <h2 className="text-3xl text-yellow-600">{ review.name}</h2>
                  </SwiperSlide>)
              }
            </Swiper>
    </div>
  )
}
