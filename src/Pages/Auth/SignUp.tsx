import { Box, Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material"
import AuthImg from '../../assets/others/authentication1.png'
import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import { Social } from "../../component/Social_Log_In/Social";


export const SignUp = () => {
  const {signUpAuth,updateUserAuth} = useAuthContext()
  const navigate =useNavigate()
  const axiosPublic = useAxiosPublic()

  const nameRef = useRef<HTMLInputElement>(null)
  const photoRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = nameRef.current?.value as string
    const photoURL = photoRef.current?.value as string
    const email = emailRef.current?.value as string
    const password = passRef.current?.value as string

    const profile = {displayName:name, photoURL}
    const userInfo ={name,email,role:'User'}
    signUpAuth(email, password)
      .then(() => { 
        updateUserAuth(profile)
          .then(() => {
            //save user to the db
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.acknowledged == true) {
                   toast.success('your account is successfully created')
                   navigate('/')
                }
            })
          }).catch(e => {
            toast.error(e.message)
            console.error(e)
        })
      })
      .catch(e => {
        console.error(e)
        toast.error(e.message)
      })
  }
  


  return (
    <Card className=" grid grid-cols-2 items-center justify-center mt-10">
 <CardMedia>
         <img src={AuthImg} alt="" />
      </CardMedia>
      <Box sx={{ width: 500, maxWidth: '100%' }}>
        <CardContent>
          <h1 className="font-medium text-2xl text-center font-serif">Please Log-In your account</h1>
        </CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
           <TextField fullWidth type='text' inputRef={nameRef} name="name" label="Your Name" id="fullWidth" required/>
          </div>
          <div>
           <TextField fullWidth type='url' inputRef={photoRef} name="photoUrl" label="Photo URL" id="fullWidth"/>
          </div>
          <div>
           <TextField fullWidth type='email' inputRef={emailRef} name="email" label="Your Email" id="fullWidth" required/>
          </div>

          <div>
          <TextField fullWidth type='password' inputRef={passRef} name="password" label="Your Password" id="fullWidth" required/>
          </div>

        
          <Button type="submit" variant="contained">Create account</Button>
            <Link to={`/signIn`} className="link"> <Typography>
           Already have an account. Please sign in your account
          </Typography></Link>
        </form>
          <Social/>
    </Box>
    </Card>
    
  )
}

