import { Button } from "@mui/material"
import { SimilarHeading } from "../../../component/SimilarHeading"
import { MenuType } from "../../../Type/Types"
import { DisplayMenu } from "../../Home/PopularMenu/DisplayMenu"
import { Link, NavLink } from "react-router-dom"
type Prop = {
  items: MenuType[]
  loading: boolean
  offered?:string
}
export const MenuCategory = ({items,loading,offered}:Prop) => {

   return (
     <div className="mb-10 max-w-5xl mx-auto">
       {offered && 
         <div className="my-10">
         <SimilarHeading heading="-------- Don't miss ---------" text={offered} />
          </div>
          }
           {
               loading ?
                   <div className="text-center">
                       <span className="loading loading-spinner text-error loading-lg  "></span>
                   </div>
                   :
                   <>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                         {
                             items?.map(item=><DisplayMenu key={item._id} item={item} />)
                         }
                       </div>
                        <div className="text-center">
                          <Link to={`/shop`}>
                                    <Button variant="contained" className="">Order Now</Button>
                          </Link>
                        </div>
                   </>
           }
     </div>
   )
 }
