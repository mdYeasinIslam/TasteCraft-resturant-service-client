import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { MenuType } from "../../../Type/Types"
import { useAuthContext } from "../../../hooks/useAuthContext"
import toast from "react-hot-toast"
import { useAxiosSecure } from "../../../hooks/useAxiosSecure"
import { useShopCart } from "../../../hooks/useShopCart"

type Prop = {
    item:MenuType
}
export const DisplayShopItems = ({ item }: Prop) => {
  const { name, category, recipe, price, image ,_id} = item
  const {user} = useAuthContext()
  const axiosSecure =useAxiosSecure()
  const [,refetch] = useShopCart()
  const handleShopItem = (food: MenuType) => {
    if (user && user?.email) {
      console.log(user.email, food)
      const shopCart = {
        itemId: _id,
        name,
        category,
        recipe,
        price,
        image,
        userEmail: user?.email
      }
      axiosSecure.post(`/shopCarts`, shopCart)
        .then(res => {
          console.log(res)
          if (res.data?.success) {
            toast.success(`${name},successfully added to the cart`)
            refetch()
          }
        }).catch(e=>{
          console.log(e)
          toast.error(e.message)
      })
    }
    else {
      toast.error('Please log-in first')
    }
  }

  return (
     <Card sx={{ maxWidth: 345 }} className="flex flex-col items-end justify-end">
      <div className="w-full h-full">
      <CardMedia
        component="img"
        alt="green iguana"
        className="w-full h-[16rem]"
        image={image}
      />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }} className="">
          {category}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {recipe}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price : {price}
        </Typography>

      </CardContent>
      <CardActions className="">
        <Button onClick={()=>handleShopItem(item)} size="small" variant="outlined" sx={{color:'black',fontWeight:'bold'}}>Add to cart</Button>
      </CardActions>
    </Card>
  )
}
