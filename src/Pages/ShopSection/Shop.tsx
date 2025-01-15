import shopImg from '../../assets/shop/banner2.jpg'
import { Cover } from '../../component/Cover'
import { ShopingItems } from './ShopigItems/ShopingItems'
export const Shop = () => {
  return (
      <div>
          <Cover img={shopImg} title='OUR SHOP' text='Would you like to try a dish?' />
          <ShopingItems/>
    </div>
  )
}
