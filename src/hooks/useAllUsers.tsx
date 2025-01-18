import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"

export const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: allUsers=[] , isPending,refetch }= useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const response = await axiosSecure.get('/users')
            return response.data
        }
    })
  return [allUsers,isPending,refetch]
}
