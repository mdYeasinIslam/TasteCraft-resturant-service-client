import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { Main } from "../Layout/Main"
import { SignIn } from "../Pages/Auth/SignIn"
import { SignUp } from "../Pages/Auth/SignUp"
import { Menu } from "../Pages/MenuSection/Menu"
import { Shop } from "../Pages/ShopSection/Shop"
import { PrivateRoot } from "./PrivateRoot"
import { About } from "../Pages/About/About"
import { DashBoard } from "../Layout/DashBoard"
import { UserHome } from "../Dashboard/UserDashBoard/UserHome/UserHome"
import { Carts } from "../Dashboard/UserDashBoard/Carts/Carts"
import { useIsAdmin } from "../hooks/useIsAdmin"

import { AdminDashboard } from "../Dashboard/AdminDashboard/AdminDashboard"
import { AllUser } from "../Dashboard/AdminDashboard/AllUser/AllUser"
import { AdminHome } from "../Dashboard/AdminDashboard/AdminHome/AdminHome"


export const Root = () => {
    const isAdmin = useIsAdmin()
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }, 
                {
                    path:'/home',
                    element:<Home/>
                }, 
                
                {
                    path:'/menu',
                    element:<Menu/>
                }, 
                {
                    path:'/shop',
                    element:<PrivateRoot><Shop/></PrivateRoot>
                }, 
                {
                    path: '/about',
                    element:<About/>
                },
                {
                    path:'/signIn',
                    element:<SignIn/>
                },
                {
                    path:'/signUp',
                    element:<SignUp/>
                }
            ]
        },
        {
            path: '/userDashboard',
            element:<PrivateRoot><DashBoard /></PrivateRoot>,
            children: [
                {
                    path: '/userDashboard',
                    element:<Navigate to={`/userDashboard/${isAdmin?'adminhome':'userhome'}`}/>
                },
                
                {
                    path: '/userDashboard/userhome',
                    element:<UserHome/>
                },
                
                {
                    path: '/userDashboard/mycart',
                    element:<Carts/>
                },

                {
                    path: '/userDashboard',
                    element: <AdminDashboard />,
                    children: [
                        {
                            path: '/userDashboard/adminhome',
                            element:<AdminHome/>
                        },
                        {
                            path: '/userDashboard/allusers',
                            element: <AllUser/>
                        }
                    ]
                }

            ]
        }
    ])
    return (
    <RouterProvider router={routes}/>
  )
}
