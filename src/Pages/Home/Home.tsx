import { UrlTitleName } from "../../component/UrlTitleName"
import { Banner } from "./Banner/Banner"
import { BannerTwo } from "./Banner/BannerTwo"
import { Featured } from "./FeaturedSection/Featured"
import { PopularManus } from "./PopularMenu/PopularManus"
import { Testimonial } from "./Testimonial/Testimonial"

export const Home = () => {
  return (
    <div>
      <UrlTitleName title="Home" />
      <Banner/>
      <BannerTwo/>
      <PopularManus/>
      <Featured />
      <Testimonial/>
    </div>
  )
}
