import { Rating } from "@smastrom/react-rating"
import { ReviewType } from "../../../Type/Types"

import { SwiperSlide,Swiper } from "swiper/react"
import 'swiper/swiper-bundle.css'; 
import '../style.css'
import { Navigation } from 'swiper/modules';

type Prop = {
    review :ReviewType
}
export const DisplayTestimonial = ({review}:Prop) => {
  return <SwiperSlide>{review.details}</SwiperSlide>
  
}
