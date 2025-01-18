import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useIsAdmin } from "../../hooks/useIsAdmin";

export const DashBoardNavbar = () => {
  const isAdmin = useIsAdmin()
  return (
    <div  role="presentation" className="w-full min-h-screen h-full bg-[#D1A054] ">
      <Box className='text-center pt-5'>
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
                className=''
            >
              <NavLink to={'/'} className=''>
                <span className="font-sans uppercase p-0 m-0">TasteCraft</span><br />
            <span className="uppercase font-serif text-[16px] p-0 m-0">Resturant</span>
              </NavLink>
              
         </Typography>
      </Box>
      <Box>
        <List>
          {
            isAdmin ?
              <>
              {['Admin Home','Add Item', 'Manage Item','All Users'].map((text, index) => (
                <NavLink to={`/userDashboard/${text.toLowerCase().split(' ').join('')}`}>
                  <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 1 === 0 ? <IoHome /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                  </ListItem>
                </NavLink>
            ))}
              </>
              :
              <>
                {['User Home','My Cart', 'Add a Review','My Booking'].map((text, index) => (
                              <NavLink to={`/userDashboard/${text.toLowerCase().split(' ').join('')}`}>
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                      <ListItemIcon>
                                        {index % 1 === 0 ? <IoHome /> : <MailIcon />}
                                      </ListItemIcon>
                                      <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                              </NavLink>
                 ))}
              </>
            }
              

          
          </List>
          <Divider />
          <List>
            {['Home', 'Menu', 'Shop'].map((text, index) => (
                <NavLink to={`/${text.toLowerCase().split(' ').join('')}`}>
                  <ListItem key={index} disablePadding>
                    <ListItemButton> 
                      <ListItemIcon>
                        {index % 1 === 0 ? <IoHome /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
            ))}
          </List>
      </Box>
     
    </div>
  )
}
