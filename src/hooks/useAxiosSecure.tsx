import axios from "axios"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"

 const axiosSecure = axios.create({
   baseURL: 'http://localhost:5000'
})

export const useAxiosSecure = () => {
  const { signOutAuth } = useAuthContext()
  
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.authorization =`Bearer ${token}`
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  axiosSecure.interceptors.response.use((response) => {
    return response
  }, async (error) => {
    console.log(error.response.status)
    const status = error.response.status;
    if (status == 401 || status == 403) {
      await signOutAuth()
     return <Navigate to={'/signIn'}/>
    }
  })
  return axiosSecure
}
