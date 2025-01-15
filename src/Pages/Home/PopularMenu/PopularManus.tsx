
import { DisplayMenu } from "./DisplayMenu"
import { SimilarHeading } from "../../../component/SimilarHeading"
import { useMenu } from "../../../hooks/useMenu"

export const PopularManus = () => {
    const {menu,loading}= useMenu()
    const popular = menu?.filter((item) => item.category ==='popular')
  return (
    <div>
        <div className="my-10">
        <SimilarHeading heading="-------- Check it out ---------" text="FROM OUR MENU"/>
          </div>
          {
              loading ?
                  <div className="text-center">
                      <span className="loading loading-spinner text-error loading-lg  "></span>
                  </div>
                  :
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                        {
                            popular?.map(item=><DisplayMenu key={item._id} item={item} />)
                        }
                    </div>
                  </>
          }
    </div>
  )
}
