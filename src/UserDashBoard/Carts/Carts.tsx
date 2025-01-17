import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Paper from '@mui/material/Paper';
import { CartsHeading } from "./CartsHeading";
import { useShopCart } from "../../hooks/useShopCart";
import { ShopCartType } from "../../Type/Types";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";



export const Carts = () => {
  const [cartData] = useShopCart()
  const axiosSecure = useAxiosSecure()
  const [,refetch,isPending] = useShopCart()

  const totalPrice = cartData.reduce((total: number, item: ShopCartType) => total += item.price, 0)
  

  const handleDelete = (id: string) => {
    
    toast((t) =>(
      <div className="space-y-5">
        <span> Are you sure you want to delete this item?</span>
        <div className="flex gap-5 justify-center">
          <Button
            onClick={async() => {
              const response = await axiosSecure.delete(`/shopCarts/${id}`)
              if (response.data?.acknowledged == true) {
                toast.dismiss()
                refetch()
              }
          }}
            variant="outlined">Yes</Button>
          <Button onClick={()=>toast.dismiss()} variant="outlined">No</Button>
        </div>
      </div>
    ), {
    duration:5000
    })
  }
  return (
    <div className='w-full h-full bg-base-200 px-5 py-10'>
      <CartsHeading/>
      <TableContainer component={Paper} className="">
        <div className="flex justify-between px-10 py-5">
          <p className="text-2xl font-medium font-sans">Total Item:{cartData.length}</p>
          <p className="text-2xl font-medium font-sans">Total Price:{totalPrice.toFixed(2) }</p>
            <div>
              <Button variant="outlined" sx={{fontWeight:"bold"}}>Pay</Button>
            </div>
        </div>
      <Table sx={{ minWidth: 650 }} className="bg-white " size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">No.</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price&nbsp;($)</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody className="">
            {
              isPending ?
               <div className="flex justify-center"><CircularProgress className="" size="3rem" /></div>
                :
                <>
                  {cartData.map((item:ShopCartType,idx:number) => (
                    <TableRow
                      key={item.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{idx + 1}</TableCell>
                      <TableCell align="left">
                        {/* {item.image} */}
                        <img src={item.image} className="w-20 rounded-xl" alt="" />
                      </TableCell>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="left">{item.price}</TableCell>
                      <TableCell align="left">
                        <Button onClick={() => handleDelete(item._id)} variant="outlined">
                          <MdDelete className="w-6 h-6  md:w-8 md:h-8 text-red-600" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
            }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
