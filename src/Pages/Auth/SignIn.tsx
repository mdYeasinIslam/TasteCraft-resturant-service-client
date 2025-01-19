import { Box, Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import AuthImg from '../../assets/others/authentication1.png'
import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { Social } from "../../component/Social_Log_In/Social";
export const SignIn = () => {
  const [disable, setDisable] = useState(true)
  const {signInAuth} = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.pathname || "/"
  console.log(from)
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  const captchaRef = useRef<HTMLInputElement | null>(null)
  //for captcha
   useEffect(() => {
       loadCaptchaEnginge(6)
    }, [])
//form handler
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current?.value as string
    const password = passRef.current?.value as string

     signInAuth(email, password)
       .then(() => { 
        toast.success('your log-in process complete')
        navigate(from,{replace:true})
      })
      .catch(e => {
        console.error(e)
        toast.error(e.message)
      })
  }
  //captcha validation 
  const onChangeHandler = () => {
    const captchaValue = captchaRef.current?.value as string
    // const captchaValue = e.currentTarget?.value as string
    if (validateCaptcha(captchaValue)==true) {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
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
           <TextField fullWidth type='email' inputRef={emailRef} name="email" label="Your Email" id="fullWidth" required />
          </div>
          <div>
          <TextField fullWidth type='password' inputRef={passRef} name="password" label="Your Password" id="fullWidth" required/>
          </div>
          <div>
            <LoadCanvasTemplate/>
          </div>
           <TextField onBlur={onChangeHandler} inputRef={captchaRef} type='text' name="captcha" className="w-1/2" label="Enter Captcha code" id="fullWidth" />
          <Button type="submit" variant="contained" disabled={disable}>Log In</Button>
          <Link to={`/signUp`} className="link"> <Typography>
            Don't have any account? Please create an account first.
          </Typography></Link>
         
        </form>
        <Social/>
    </Box>
    </Card>
    
  )
}
