import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"

//use tanstack query for fatching data from server side 
//advantage: doesn't need to use useEffect or any state for storing data

export const useShopCart = () => {
    const axiosSecure = useAxiosSecure()

    const { data:cartData } = useQuery({
        queryKey:[ 'cart'],
        queryFn: async () => {
           const response= await axiosSecure.get('/shopCarts')
            return response.data
        }
    })
  return [cartData]
}
