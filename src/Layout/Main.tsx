import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../Shared/Navbar"
import { Footer } from "../Shared/Footer"

export const Main = () => {
  const {pathname} = useLocation()
  return (
    <div>
      {
        (pathname == '/signIn' || pathname == '/signUp') ?
          <Outlet />
          :
        <>
      <Navbar/>
        <Outlet/>
        <Footer/>
        </>
      }
    </div>
  )
}
