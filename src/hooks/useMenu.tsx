import { useEffect, useState } from "react"
import { MenuType } from "../Type/Types"
import axios from "axios"

export const useMenu = () => {
      const [menu,setMenu] = useState<MenuType[]>([])
      const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_server}/menuItem`)
        .then(res=>{
          setMenu(res.data)
          setLoading(false)
        })
          .catch(e => {
          console.log(e)
        })
    },[])
  return {menu,loading}
}
