import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuthContext } from "./useAuthContext"

//use tanstack query for fatching data from server side 
//advantage: doesn't need to use useEffect or any state for storing data

export const useShopCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} =useAuthContext()
    const { refetch,data:cartData=[],isPending } = useQuery({
        queryKey:[ 'cart',user?.email],
        queryFn: async () => {
           const response= await axiosSecure.get(`/shopCarts?email=${user?.email}`)
            return response.data
        }
    })
  return [cartData ,refetch,isPending]
}
