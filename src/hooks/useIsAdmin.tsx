import { useAuthContext } from "./useAuthContext"
import { useAxiosSecure } from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"


export const useIsAdmin = () => {
  const { user } = useAuthContext()
  const axiosSecure = useAxiosSecure()
  const { data:isAdmin ,isPending} = useQuery({
    queryKey: ['isAdmin'],
    queryFn: async () => {
        const res = await axiosSecure.get(`http://localhost:5000/users/admin/?email=${user?.email}`)
        return res.data.admin
    }
    })
    console.log(isAdmin)
    return [isAdmin,isPending]
  
}
