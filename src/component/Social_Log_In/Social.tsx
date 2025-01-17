import { Button } from "@mui/material"
import { FaGithub } from "react-icons/fa";
import { useAuthContext } from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";

export const Social = () => {
    const { googleAuth } = useAuthContext()
    const axiosPublic = useAxiosPublic()
    const google = () => {
        googleAuth()
            .then((result) => {
                const userinfo ={name:result.user.displayName, emial:result.user.email}
                axiosPublic.post('/users', userinfo)
                    .then((res) => {
                        console.log(res)
                        toast.success('Google sing-in successfull')
                })
            }).catch(e => {
                console.log(e)
                toast.error(e.message)
        })
    }

  return (
    <div className="pt-4 pb-10 md:flex gap-2 ">
              <Button onClick={google} className="w-full" variant="outlined" color="success">
                  <img className="w-7" src="/assets/social/google.png" alt="" />
              </Button>
               <Button disabled className="w-full" sx={{color:"black" }}variant="outlined">
                <FaGithub className="w-7 h-7" />
               </Button>
            </div>
  )
}
