import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { Main } from "../Layout/Main"
import { SignIn } from "../Pages/Auth/SignIn"
import { SignUp } from "../Pages/Auth/SignUp"
import { Menu } from "../Pages/MenuSection/Menu"
import { Shop } from "../Pages/ShopSection/Shop"
import { PrivateRoot } from "./PrivateRoot"
import { About } from "../Pages/About/About"

export const Root = () => {
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
        }
    ])
    return (
    <RouterProvider router={routes}/>
  )
}
