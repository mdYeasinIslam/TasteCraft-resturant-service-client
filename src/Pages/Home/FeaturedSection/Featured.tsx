import { Button } from "@mui/material"
import { SimilarHeading } from "../../../component/SimilarHeading"
import SendIcon from '@mui/icons-material/Send';

import featureImg from '../../../assets/home/featured.jpg'
export const Featured = () => {
  return (
    <div className={`bg-center bg-cover bg-fixed bg-[url('../../../assets/home/featured.jpg')] my-10 h-[40rem]`}>
        <div className="bg-gray-900 bg-opacity-60 h-full">

        <div className="py-10">
               <SimilarHeading heading="-------- Check it out ---------" text="FROM OUR MENU" style={true}/>
        </div>
        <div className="grid grid-cols-2 gap-10  items-center">
            <figure className="flex justify-end ">
            <img className=" w-[28rem]  " src={featureImg} alt=""/>
            </figure>
            
            <div className="text-white space-y-10">
                      <div className="">
                           <h1>March 20,2024</h1>
                <p className="uppercase">Where can I get some ?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste, tempore nulla iusto voluptates placeat praesentium natus, quod, voluptatibus minima assumenda laudantium modi! Et earum suscipit expedita sed, ea voluptas sapiente consectetur possimus, distinctio accusantium voluptatum nesciunt cupiditate blanditiis natus?</p>
               </div>
             <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
            </div>
        </div>
        </div>
    </div>
  )
}
