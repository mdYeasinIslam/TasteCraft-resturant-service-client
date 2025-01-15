import { Cover } from "../../component/Cover"
// import img from '../../assets/menu /banner3.jpg'
// import img2 from '../../assets/menu/chef-service.jpg'
import imgBanner from '../../assets/menu/banner3.jpg'
import imgDessert from '../../assets/menu/chef-service.jpg'
import imgPizza from '../../assets/menu/pizza-bg.jpg'
import imgSalad from '../../assets/menu/salad-bg.jpg'
import imgSoup from '../../assets/menu/soup-bg.jpg'

import { UrlTitleName } from "../../component/UrlTitleName"
import { MenuCategory } from "./ManuCategory/MenuCategory"
import { useMenu } from "../../hooks/useMenu"
export const Menu = () => {
    const {menu,loading}= useMenu()
      const offered = menu?.filter((item) => item.category === 'offered')
      const dessert = menu?.filter((item) => item.category === 'dessert')
      const pizza = menu?.filter((item) => item.category === 'pizza')
      const salad = menu?.filter((item) => item.category === 'salad')
      const soup = menu?.filter((item) => item.category === 'soup')

  const text = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  return (
      <div>
      <UrlTitleName title="Menu"/>
      <Cover img={imgBanner} title="Our Menu" text="Would you like to try a dish?" />
      <MenuCategory items={offered} offered="TODAY'S OFFER" loading={loading} />

      <Cover img={imgDessert} title="DESSART" text={text} />
      <MenuCategory items={dessert} loading={loading} />

      <Cover img={imgPizza} title="PIZZA" text={text} />
      <MenuCategory items={pizza} loading={loading} />

      <Cover img={imgSalad} title="SALAD" text={text} />
      <MenuCategory items={salad} loading={loading} />

      <Cover img={imgSoup} title="SOUP" text={text} />
      <MenuCategory items={soup} loading={loading} />
    </div>
  )
}
