import { Button, CircularProgress, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Paper from '@mui/material/Paper';


import { MdDelete } from "react-icons/md";
import { UserTypeForDashboard } from "../../../Type/Types";
import { useAllUsers } from "../../../hooks/useAllUsers"
import { CartsHeading } from "../../UserDashBoard/Carts/CartsHeading";
import toast from "react-hot-toast";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { ChangeEvent } from "react";
// import {  FaUsers } from "react-icons/fa";

export const AllUser = () => {
    const [allUser,isPending,refetch] = useAllUsers()
    const axiosSecure = useAxiosSecure()

    const handleRole= (e: ChangeEvent<HTMLSelectElement> ,id:string) => {
        const role = e.currentTarget.value as string
        axiosSecure.patch(`/users/${id}`, { role })
            .then(res => {
                console.log(res)
                if (res.data.result?.acknowledged) {
                    toast.success(`This User got ${res.data?.role} role`)
                }
            }).catch(e => {
            console.log(e)
        })

  }

     const handleDelete = (id: string) => {
                toast((t) =>(
                <div className="space-y-5">
                    <span> Are you sure you want to delete this user?</span>
                    <div className="flex gap-5 justify-center">
                    <Button
                        onClick={async() => {
                        const response = await axiosSecure.delete(`/users/${id}`)
                        if (response.data?.acknowledged == true) {
                            toast.success('The user is deleted')
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
      <div className=' w-full h-full bg-base-200 px-5 py-10'>
      <CartsHeading/>
      <TableContainer component={Paper} className="max-w-4xl mx-auto">
        <div className="flex justify-between px-10 py-5">
          <p className="text-2xl font-medium font-sans uppercase">Total Users : {allUser.length}</p>
        </div>
      <Table sx={{ minWidth: 650 }} className=" bg-white " size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className="uppercase ">
            <TableCell align="left">No.</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody className="">
            {
              isPending ?  
               <div className="flex justify-center"><CircularProgress className="" size="3rem" /></div>
                :
                <>
                  {allUser.map((user:UserTypeForDashboard,idx:number) => (
                    <TableRow
                      key={idx}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{idx + 1}</TableCell>
                      <TableCell align="left">{user.name}</TableCell>
                      <TableCell align="left">
                          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                               <select onChange={(e)=>handleRole(e,user._id)}  className="select select-accent  max-w-xs select-sm">
                                    <option selected>User</option>
                                    <option>Admin</option>
                                </select>
                            </FormControl>
                              {/* <Button  variant="outlined">
                          <FaUsers className="w-4 h-4  md:w-6 md:h-6 text-yellow-600" />
                        </Button> */}
                      </TableCell>
                      <TableCell align="left">
                        <Button onClick={() => handleDelete(user._id)} variant="outlined">
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
