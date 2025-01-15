import { Box, Button, IconButton, Typography } from "@mui/material"
import {  NavLink, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import toast from "react-hot-toast"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { useShopCart } from "../hooks/useShopCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export const Navbar = () => {
  const { user, signOutAuth } = useAuthContext()
  const navigate = useNavigate()

  const [cartData] = useShopCart()

  const signOut = () => {
    signOutAuth()
      .then(() => {
        toast.success('Log-out process complete')
        navigate('/signIn')
      }).catch(e => {
        console.log(e)
        toast.error(e.message)
    })
  }
  return (
    <div className=" max-w-screen-xl mx-auto fixed z-10  w-full flex justify-between items-center text-white py-3 px-4 bg-gray-800 bg-opacity-30" >
     
         <Box>
      <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            className='items-center'
        >
          <NavLink to={'/'}>
            <span>Taste</span>
           <span>Craft</span>
          </NavLink>
          
          </Typography>
      </Box>
      <Box>
        <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
            <NavLink to={'/'}> <li>Home</li></NavLink>
            <NavLink to={'/menu'}> <li>Our Menu</li></NavLink>
          <NavLink to={'/shop'}> <li>Our Shop</li></NavLink>
          <NavLink to={'/about'}> <li>About us</li></NavLink>
        </ul>
      </Box>
      <Box>
        <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
           <NavLink to={'/shopCarts'}>
              <IconButton aria-label="cart" sx={{color:'white'}}>
                <StyledBadge badgeContent={cartData.length} color="secondary" >
                  <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
          </NavLink>
          {
            user?.email ?
              <>
             <Button onClick={signOut} sx={{color:'white',fontWeight:'bold'}} variant="outlined">Log out</Button>
              </>
              :
              <>
            <NavLink to={'/signIn'}><Button sx={{color:'white',fontWeight:'bold'}} variant="outlined">Log In</Button></NavLink>
            <NavLink to={'/signUp'}><Button sx={{color:'white',fontWeight:'bold'}} variant="outlined">Register</Button></NavLink>
              </>
          }
        </ul>
      </Box>
      
  
     
    </div>
  )
}
