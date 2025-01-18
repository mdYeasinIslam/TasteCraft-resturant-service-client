import { Outlet } from "react-router-dom"
import { DashBoardNavbar } from "../Dashboard/DashBoardNavbar/DashBoardNavbar"


export const DashBoard = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 ">
      <div className="col-span-3 border-r border-black">
         <DashBoardNavbar/>
      </div>
      {/* <Divider  orientation="vertical" variant="middle" flexItem/> */}
      <div className="col-span-9 ">
          <Outlet/>
      </div>
    </div>
  )
}
